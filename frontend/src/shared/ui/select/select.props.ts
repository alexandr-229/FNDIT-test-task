import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SelectProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	items: { key: string | number; value: string }[];
	selectedValue: number | string;
	setSelectedValue: (value: number | string) => void;
}
