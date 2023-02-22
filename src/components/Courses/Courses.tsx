import { Stack } from '@mui/material';
import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

interface Course {
	title: string;
	description: string;
	authors: string[];
	duration: number;
	creationDate: string;
}

interface Author {
	id: string;
	name: string;
}

interface Props {
	courses: Course[];
	authors: Author[];
}

const Courses = ({ courses, authors }: Props) => {
	const getAuthors = (course) => {
		return course.authors
			.map((id) => {
				const author = authors.find((item) => item.id === id);

				return author ? author.name : '';
			})
			.join(', ');
	};

	return (
		<>
			<SearchBar />
			{courses.map((course) => (
				<Stack spacing={2} key={course.title}>
					<CourseCard
						title={course.title}
						description={course.description}
						authors={getAuthors(course)}
						duration={course.duration}
						creationDate={course.creationDate}
					/>
				</Stack>
			))}
		</>
	);
};

export default Courses;
