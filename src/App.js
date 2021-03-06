import React, { useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About/About';
import Grid from './components/Grid';

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>
			{new Date().getFullYear()}
		</Typography>
	);
}

const theme = createTheme();

export default function Main() {
	const aboutRef = useRef(null);
	const onButtonClick = ({ target }) => {
		const sections = {
			about: () => aboutRef.current.scrollIntoView(),
		};
		sections[target.name]();
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NavBar onButtonClick={onButtonClick} />
			<main>
				<Hero />
				<Box
					sx={{
						bgcolor: 'background.paper',
						pt: 8,
						pb: 6,
					}}
				>
					<section ref={aboutRef}>
						<About />
					</section>
				</Box>
				<Grid />
			</main>
			{/* Footer */}
			<Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="text.secondary"
					component="p"
				>
					Something here to give the footer a purpose!
				</Typography>
				<Copyright />
			</Box>
			{/* End footer */}
		</ThemeProvider>
	);
}
