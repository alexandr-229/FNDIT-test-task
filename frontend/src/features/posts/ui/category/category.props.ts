import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CategoryColor } from '../../types/colors';

export interface CategoryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	category: string;
	color: CategoryColor;
}
