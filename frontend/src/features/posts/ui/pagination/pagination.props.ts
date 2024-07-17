import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Pagination } from '../../types/pagination';

export interface PaginationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	pagination: Pagination;
	setPagination: (pagination: Pagination) => void;
}
