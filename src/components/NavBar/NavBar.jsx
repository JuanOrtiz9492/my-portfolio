import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function NavBar() {
	return (
		<AppBar position="relative">
			<Toolbar>
				<Typography variant="h6" color="inherit" noWrap>
					Album layout
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default NavBar;
