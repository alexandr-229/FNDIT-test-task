import clsx from 'clsx';
import styles from './header.module.css';
import { HeaderProps } from './header.props';

export const Header = ({ postsCount, className, ...props }: HeaderProps) => {
	return (
		<div className={clsx(styles.header, className)} {...props}>
			<p className={styles.title}>Total posts count: <span className={styles.count}>{postsCount}</span></p>
		</div>
	);
};
