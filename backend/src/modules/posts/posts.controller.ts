import { Request, Response } from 'express';
import { PostsService } from './posts.service';
import { GetAllPostsQuery } from './types/get-all-posts.types';
import { GetPostParams } from './types/get-post.types';
import { ERROR_IN_PARSE_RSS, INVALID_COUNT_QUERY, INVALID_PAGE_QUERY, SOMETHING_SENT_WRONG } from './constants';

export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	async getAllPosts(req: Request<null, null, null, GetAllPostsQuery>, res: Response) {
		try {
			const { page, count, title } = req.query;
			if (page && Number.isNaN(+page)) {
				return res.status(400).json({ message: INVALID_PAGE_QUERY });
			}

			if (count && Number.isNaN(+count)) {
				return res.status(400).json({ message: INVALID_COUNT_QUERY });
			}

			const [result, error] = await this.postsService.getAllPosts(+(page || 1), +(count || 10), title);
			if (error) {
				return res.status(500).json({ message: error });
			}

			return res.status(200).json(result);
		} catch (error) {
			console.log('Failed to get all posts:', error);
			return res.status(500).json({ message: SOMETHING_SENT_WRONG });
		}
	}

	async getPost(req: Request<GetPostParams>, res: Response) {
		try {
			const { id } = req.params;
			const [post, error] = await this.postsService.getPost(id);
			if (error) {
				return res.status(500).json({ message: error });
			}

			return res.json(post)
		} catch (error) {
			console.log('Failed to get post:', error);
			return res.status(500).json({ message: SOMETHING_SENT_WRONG });
		}
	}

	async parseRSS(req: Request, res: Response) {
		try {
			await this.postsService.parseRSS();
			return res.json({ message: 'OK' });
		} catch (error) {
			console.log('Failed to parse RSS:', error);
			return res.status(500).json({ message: ERROR_IN_PARSE_RSS });
		}
	}
}
