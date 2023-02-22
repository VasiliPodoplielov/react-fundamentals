import React from 'react';
import { Button as MUIButton } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { ButtonPropsColorOverrides } from '@mui/material/Button/Button';

interface Props {
	buttonText: string;
	onClick: (event: React.MouseEvent<HTMLElement>) => void;
	color?: OverridableStringUnion<
		| 'inherit'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'error'
		| 'info'
		| 'warning',
		ButtonPropsColorOverrides
	>;
}

const Button = ({ buttonText, onClick, color }: Props) => {
	return (
		<MUIButton
			variant='outlined'
			sx={{ height: '40px' }}
			onClick={onClick}
			color={color}
		>
			{buttonText}
		</MUIButton>
	);
};

export default Button;
