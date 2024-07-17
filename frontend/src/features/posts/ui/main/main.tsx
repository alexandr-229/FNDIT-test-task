'use client';

import { useGetPosts } from '../../hooks/use-get-posts';
import styles from './main.module.css';

export const PostsList = () => {
	const { posts } = useGetPosts();

	console.log(posts);
	
	return (
		<div className={styles.wrapper}></div>
	);
};
