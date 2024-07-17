import { Post } from '../../../types/post';

export interface GetAllPostsQuery {
	page?: string;
	count?: string;
	title?: string;
}

export interface GetAllPostsResult {
	data: Post[];
	pagination: {
		count: number;
		page: number;
		total: number;
	};
}
