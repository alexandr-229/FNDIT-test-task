import clsx from 'clsx';
import styles from './category.module.css';
import { CategoryProps } from './category.props';

export const Category = ({ category, color, className, ...props }: CategoryProps) => {
	return (
		<div className={clsx(styles.wrapper, styles[color], className)} {...props}>
			<p className={styles.text}>{category}</p>
		</div>
	);
};
