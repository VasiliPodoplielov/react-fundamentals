import React from 'react';
import { Box, Typography } from '@mui/material';
import { StyledBox } from './CourseCard.styles';

interface Props {
	title: string;
	description: string;
	isEllipsis?: boolean;
}

const CourseParam = ({ title, description, isEllipsis }: Props) => {
	const Wrapper = isEllipsis ? StyledBox : Box;

	return (
		<Wrapper sx={{ mb: 1 }}>
			<Typography
				variant='body1'
				sx={{ fontWeight: 'bold', mr: 1 }}
				component='span'
			>
				{title}:
			</Typography>
			<Typography variant='body1' component='span'>
				{description}
			</Typography>
		</Wrapper>
	);
};

export default CourseParam;
