import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Post } from '../../types/post';

export interface RowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	post: Post;
}
