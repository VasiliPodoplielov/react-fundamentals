import { Box, TextField } from '@mui/material';
import React from 'react';
import Button from '../../../../common/Button/Button';

const SearchBar = () => {
	return (
		<Box sx={{ justifyContent: 'space-between', display: 'flex', mb: 3 }}>
			<Box>
				<TextField
					id='search'
					label='Search'
					variant='outlined'
					size='small'
					sx={{ mr: 2 }}
				/>
				<Button
					buttonText='Search'
					onClick={() => console.log('Search course')}
				/>
			</Box>
			<Button
				buttonText='Add new course'
				onClick={() => console.log('Add new course')}
			/>
		</Box>
	);
};

export default SearchBar;
