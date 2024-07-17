import { Pagination } from './pagination';

export interface Post {
	id: string;
	creator: string;
	title: string;
	publishDate: string;
	content: string;
	categories: string[];
}

export interface PostsResponse {
	data: Post[];
	pagination: Pagination;
}
