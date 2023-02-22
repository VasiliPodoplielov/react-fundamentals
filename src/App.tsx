import React from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { mockedAuthorsList, mockedCoursesList } from './mocks/courses';

const App = () => {
	return (
		<>
			<Header />
			<Container sx={{ mt: 4, mb: 4 }}>
				<Courses courses={mockedCoursesList} authors={mockedAuthorsList} />
			</Container>
		</>
	);
};

export default App;
