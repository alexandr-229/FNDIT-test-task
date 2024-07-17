import { Document } from 'mongoose';
import { Post } from '../../../types/post';

export const formatPost = (post: Document<unknown, {}, Post>): Post => {
	const { _id, ...rest } = post.toJSON();
	if ('__v' in rest) {
		delete rest['__v']
	}

	const result = {
		id: _id,
		...rest,
	};

	return result;
};
