import clsx from 'clsx';
import styles from './pagination.module.css';
import { PaginationProps } from './pagination.props';
import { Select } from '@/shared/ui/select/select';
import { Arrow } from './assets/arrow';

export const Pagination = ({ className, pagination, setPagination, ...props }: PaginationProps) => {
	const handlePageDecrement = () => {
		if (pagination.page < 2) {
			return;
		}

		setPagination({ ...pagination, page: pagination.page - 1 });
	};

	const handlePageIncrement = () => {
		if (pagination.page >= pagination.total / pagination.count) {
			return;
		}

		setPagination({ ...pagination, page: pagination.page + 1 });
	};

	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<div className={styles.block}>
				<p className={styles.text}>Show rows per page</p>
				<Select
					setSelectedValue={(value) => setPagination({ ...pagination, count: value as number })}
					selectedValue={pagination.count}
					items={[
						{ key: 10, value: '10' },
						{ key: 20, value: '20' },
						{ key: 50, value: '50' },
						{ key: 100, value: '100' },
					]}
				/>
			</div>
			<div className={styles.block}>
				<p className={styles.text}>
					{`${((pagination.page - 1) * pagination.count) + 1} - ${pagination.page * pagination.count} of ${pagination.total}`}
				</p>
				<div className={styles.arrows}>
					<button className={styles.leftArrow} onClick={handlePageDecrement}>
						<Arrow />
					</button>
					<button className={styles.rightArrow} onClick={handlePageIncrement}>
						<Arrow />
					</button>
				</div>
			</div>
		</div>
	);
};
