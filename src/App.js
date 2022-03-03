import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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
		console.log(target.name);
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
					<About ref={aboutRef} />
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="text.primary"
							gutterBottom
						>
							Album layout
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="text.secondary"
							paragraph
						>
							Something short and leading about the collection below—its
							contents, the creator, etc. Make it short and sweet, but not too
							short so folks don&apos;t simply skip over it entirely.
						</Typography>
						<Stack
							sx={{ pt: 4 }}
							direction="row"
							spacing={2}
							justifyContent="center"
						>
							<Button variant="contained">Main call to action</Button>
							<Button variant="outlined">Secondary action</Button>
						</Stack>
					</Container>
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
