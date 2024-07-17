import cron from 'node-cron'
import Parser from 'rss-parser';
import { PostModel } from './models/post';

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
}

const postsService = new PostsService();
cron.schedule('0 * * * *', postsService.parseRSS)
