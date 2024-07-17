import Skeleton from 'react-loading-skeleton';
import styles from './table-skeleton.module.css';
import 'react-loading-skeleton/dist/skeleton.css'

export const TableSkeleton = () => {
	return (
		<div>
			<Skeleton baseColor="#d7d6d6" highlightColor="#eee" className={styles.skeleton} count={10} />
		</div>
	);
};
