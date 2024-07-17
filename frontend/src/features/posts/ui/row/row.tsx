import clsx from 'clsx';
import styles from './row.module.css';
import { RowProps } from './row.props';
import { formatDate } from '../../helpers/date';
import { Category } from '../category/category';
import { useState } from 'react';

export const Row = ({ post }: RowProps) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.openIconWrapper} onClick={() => setOpen(!open)}>
					<div
						className={clsx(styles.openIcon, {
							[styles.open]: open,
						})}
					/>
				</div>
				<div className={clsx(styles.block, styles.border)}>
					<p className={styles.text}>{post.title}</p>
				</div>
				<div className={clsx(styles.block, styles.border)}>
					<p className={styles.text}>{post.creator}</p>
				</div>
				<div className={clsx(styles.block, styles.border)}>
					<p className={styles.text}>{formatDate(post.publishDate)}</p>
				</div>
				<div className={clsx(styles.block, styles.category)}>
					{post.categories.map((category, index) => (
						<Category key={category} category={category} color={index % 2 === 0 ? 'green' : 'yellow'} />
					))}
				</div>
			</div>
			<div
				className={clsx(styles.description, {
					[styles.open]: open
				})}
			>
				<p className={styles.descriptionTitle}>Read more:</p>
				<p className={styles.descriptionText}>{post.content}</p>
			</div>
		</>
	);
};
