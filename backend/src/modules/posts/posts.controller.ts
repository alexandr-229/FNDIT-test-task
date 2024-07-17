import { Request, Response } from 'express';
import { PostsService } from './posts.service';

export class PostsController {
	constructor(private readonly postsService: PostsService) {}

	async getAllPosts(req: Request, res: Response) {
		try {
			return res.json({ message: 'Get all posts' })
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
