'use client';

import { useGetPosts } from '../../hooks/use-get-posts';
import { Table } from '../table/table';
import styles from './main.module.css';

export const PostsList = () => {
	const { posts, loading } = useGetPosts();
	
	return (
		<div className={styles.wrapper}>
			<Table posts={posts} loading={loading} />
		</div>
	);
};
