import React from 'react';
import { Container, Typography } from '@mui/material';

function About() {
	return (
		<Container maxWidth="xl" disableGutters>
			<Typography
				variant="string"
				align="center"
				sx={{ margin: '0 auto', display: 'block' }}
			>
				Hello this is me
			</Typography>
		</Container>
	);
}

export default About;
