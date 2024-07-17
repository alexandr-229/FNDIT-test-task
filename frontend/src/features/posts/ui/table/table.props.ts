import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Post } from '../../types/post';

export interface TableProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	posts: Post[];
	loading: boolean;
	pageCount: number;
}
