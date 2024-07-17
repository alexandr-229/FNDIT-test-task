import { Request, Response } from 'express';
import { PostsService } from './posts.service';
import { GetAllPostsQuery } from './types/get-all-posts.types';

export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	async getAllPosts(req: Request<null, null, null, GetAllPostsQuery>, res: Response) {
		try {
			const { page, count, title } = req.query;
			if (page && Number.isNaN(+page)) {
				return res.status(400).json({ message: 'Invalid page query' });
			}

			if (count && Number.isNaN(+count)) {
				return res.status(400).json({ message: 'Invalid count query' });
			}

			const [result, error] = await this.postsService.getAllPosts(+(page || 1), +(count || 10), title);
			if (error) {
				return res.status(500).json({ message: error });
			}

			return res.status(200).json(result);
		} catch (error) {
			console.log('Failed to get all posts:', error);
			return res.status(500).json({ message: 'Something went wrong' });
		}
	}

	async getPost(req: Request, res: Response) {
		try {
			return res.json({ message: 'Get post' })
		} catch (error) {
			console.log('Failed to get post:', error);
			return res.status(500).json({ message: 'Something went wrong' });
		}
	}
}
