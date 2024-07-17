import clsx from 'clsx';
import styles from './select.module.css';
import { SelectProps } from './select.props';
import { Arrow } from './assets/arrow';
import { useEffect, useRef, useState } from 'react';

export const Select = ({ className, items, selectedValue, setSelectedValue, ...props }: SelectProps) => {
	const selectRef = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState<boolean>(false);
	const label = items.find((item) => item.key === selectedValue)?.value || 'Select value';

	useEffect(() => {
		document.addEventListener('mousedown', handleCloseSelect);

		return () => {
			document.removeEventListener('mousedown', handleCloseSelect);
		};
	}, []);

	const handleCloseSelect = (event: MouseEvent) => {
		if (!selectRef.current?.contains(event.target as Node)) {
			setOpen(false);
		}
	};

	return (
		<div
			ref={selectRef}
			onClick={() => setOpen(!open)}
			className={clsx(styles.selectedWrapper, className)}
			{...props}
		>
			<p className={styles.label}>{label}</p>
			<Arrow />
			<div
				className={clsx(styles.items, {
					[styles.open]: open,
				})}
				style={{
					maxHeight: open ? items.length * 28 : 0
				}}
			>
				{items.map((item) => (
					<div
						onClick={() => setSelectedValue(item.key)}
						className={styles.item}
						key={item.key}
					>
						<p>{item.value}</p>
					</div>
				))}
			</div>
		</div>
	);
};
