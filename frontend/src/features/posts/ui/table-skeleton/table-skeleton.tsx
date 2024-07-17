import Skeleton from 'react-loading-skeleton';
import styles from './table-skeleton.module.css';
import 'react-loading-skeleton/dist/skeleton.css'
import { TableSkeletonProps } from './table-skeleton.props';

export const TableSkeleton = ({ pageCount }: TableSkeletonProps) => {
	return (
		<div>
			<Skeleton baseColor="#d7d6d6" highlightColor="#eee" className={styles.skeleton} count={pageCount} />
		</div>
	);
};
