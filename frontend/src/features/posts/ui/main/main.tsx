'use client';

import { useGetPosts } from '../../hooks/use-get-posts';
import { Header } from '../header/header';
import { Pagination } from '../pagination/pagination';
import { Table } from '../table/table';
import styles from './main.module.css';

export const PostsList = () => {
	const { posts, loading, pagination, setPagination } = useGetPosts();
	
	return (
		<div className={styles.wrapper}>
			<Header postsCount={pagination.total} />
			<Table posts={posts} loading={loading} pageCount={pagination.count} />
			<Pagination pagination={pagination} setPagination={setPagination} />
		</div>
	);
};
