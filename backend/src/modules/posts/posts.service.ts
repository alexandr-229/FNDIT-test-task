import cron from 'node-cron'
import Parser from 'rss-parser';
import { PostModel } from './models/post';
import { GetAllPostsResult } from './types/get-all-posts.types';

export class PostsService {
	async parseRSS() {
		try {
			const parser = new Parser();
			const url = process.env.RSS_URL;
			if (!url) {
				throw new Error('Add RSS_URL to the env file')
			}

			const feed = await parser.parseURL(url);
			const posts = feed.items.map((item) => ({
				title: item.title || '',
				creator: item.creator,
				publishDate: item.pubDate,
				categories: item.categories || [],
				content: item['content:encodedSnippet'],
			}));

			const promises = posts.map(async (post) => {
				const existsPost = await PostModel.findOne({
					creator: post.creator,
					publishDate: post.publishDate,
				});

				if (existsPost) {
					existsPost.title = post.title;
					existsPost.content = post.content;
					existsPost.categories = post.categories;
				} else {
					await PostModel.create(post);
				}
			});

			await Promise.all(promises);
			console.log('RSS parsed')
		} catch (error) {
			console.log('Failed to parse RSS:', error);
		}
	}

	async getAllPosts(page: number, count: number, title?: string): Promise<[GetAllPostsResult | null, string | null]> {
		try {
			const filters = title ? { title: { $regex: new RegExp(title, 'i') } } : {};
			const [posts, total] = await Promise.all([
				PostModel
					.find(filters)
					.sort({ title: -1 })
					.skip((page - 1) * count)
					.limit(count),
				PostModel
					.find(filters)
					.countDocuments()
			]);

			const data = posts.map((post) => {
				const { _id, ...rest } = post.toJSON();
				if ('__v' in rest) {
					delete rest['__v']
				}

				return {
					id: _id,
					...rest,
				}
			});

			const result: GetAllPostsResult = {
				data,
				pagination: {
					total,
					count,
					page,
				},
			};

			return [result, null];
		} catch (error) {
			console.log('Failed to get all posts:', error);
			return [null, 'Failed to get all posts'];
		}
	}
}

const postsService = new PostsService();
cron.schedule('0 * * * *', postsService.parseRSS)
