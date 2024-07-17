import styles from './table-header.module.css';
import { TableHeaderProps } from './table-header.props';

export const TableHeader = ({}: TableHeaderProps) => {
	return (
		<div className={styles.wrapper}>
			<div />
			<div className={styles.block}>
				<p className={styles.title}>Title</p>
			</div>
			<div className={styles.block}>
				<p className={styles.title}>Author</p>
			</div>
			<div className={styles.block}>
				<p className={styles.title}>Date</p>
			</div>
			<div className={styles.block}>
				<p className={styles.title}>Categories</p>
			</div>
		</div>
	);
};
