import { Box, Typography } from '@mui/material';
import React from 'react';
import { ItemWrapper } from './CourseCard.styles';
import CourseParam from './CourseParam';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';

interface Props {
	title: string;
	description: string;
	authors: string;
	duration: number;
	creationDate: string;
}

const CourseCard = ({
	title,
	description,
	authors,
	duration,
	creationDate,
}: Props) => {
	return (
		<ItemWrapper>
			<Box sx={{ display: 'flex' }}>
				<Box sx={{ width: '70%', pr: 4 }}>
					<Typography variant='h3'>{title}</Typography>
					<Typography variant='body2'>{description}</Typography>
				</Box>
				<Box sx={{ width: '30%' }}>
					<CourseParam title='Author' description={authors} isEllipsis />
					<CourseParam
						title='Duration'
						description={getCourseDuration(duration)}
					/>
					<CourseParam title='Created' description={creationDate} />
				</Box>
			</Box>
		</ItemWrapper>
	);
};

export default CourseCard;
