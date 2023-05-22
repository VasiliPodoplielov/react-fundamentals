import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';

const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar component={Container}>
					<Logo />
					<Typography
						variant='body1'
						component='div'
						sx={{ flexGrow: 1, textAlign: 'right', mr: 2 }}
					>
						Username
					</Typography>
					<Button
						buttonText='Logout'
						onClick={() => console.log('Logout')}
						color='inherit'
					/>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
