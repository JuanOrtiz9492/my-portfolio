import React from 'react';
import { Container, Typography } from '@mui/material';

import lang from '../../utils/lang';

const {
	en: { about },
} = lang;
function About() {
	return (
		<Container maxWidth="sm">
			<Typography
				component="h1"
				variant="h2"
				align="center"
				color="text.primary"
				gutterBottom
			>
				{about.title}
			</Typography>
			<Typography variant="h5" align="center" color="text.secondary" paragraph>
				{about.description}
			</Typography>
		</Container>
	);
}

export default About;
