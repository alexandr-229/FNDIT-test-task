import { Router } from 'express';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

export const postsRouter = Router();

const postsController = new PostsController(new PostsService());

postsRouter.get('/all', postsController.getAllPosts.bind(postsController))
postsRouter.get('/:id', postsController.getPost.bind(postsController))
