import cron from 'node-cron'
import Parser from 'rss-parser';

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
				creator: item.creator,
				title: item.title,
				publishDate: item.pubDate,
				content: item['content:encodedSnippet'],
				categories: item.categories,
			}));

			// save posts
		} catch (error) {
			console.log('Failed to parse RSS:', error);
		}
	}
}

const postsService = new PostsService();
cron.schedule('* * * * * *', postsService.parseRSS)
