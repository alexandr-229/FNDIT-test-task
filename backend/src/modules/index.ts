import { Router } from 'express';
import { postsRouter } from './posts/posts.router';

export const router = Router();

router.use('/post', postsRouter);
