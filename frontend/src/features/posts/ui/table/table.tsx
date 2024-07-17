import styles from './table.module.css';
import { Row } from '../row/row';
import { TableHeader } from '../table-header/table-header';
import { TableProps } from './table.props';
import { TableSkeleton } from '../table-skeleton/table-skeleton';

export const Table = ({ posts, loading }: TableProps) => {
	if (loading) {
		return <TableSkeleton />
	}

	return (
		<div className={styles.wrapper}>
			<TableHeader />
			<div className={styles.items}>
				{posts.map((post) => (
					<Row post={post} key={post.id} />
				))}
			</div>
		</div>
	);
};
