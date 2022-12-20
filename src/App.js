import React, { useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LinkedIn, GitHub } from '@mui/icons-material';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About/About';
import ProjectsGrid from './components/Grid';

const theme = createTheme();

export default function Main() {
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const onButtonClick = (section) => {
		const sections = {
			about: () =>
				aboutRef.current.scrollIntoView({
					block: 'center',
					behavior: 'smooth',
				}),
			projects: () =>
				projectsRef.current.scrollIntoView({
					block: 'center',
					behavior: 'smooth',
				}),
			contactme: () => {},
		};
		sections[section]();
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
				<div ref={projectsRef}>
					<ProjectsGrid />
				</div>
			</main>
			{/* Footer */}
			<Box
				sx={{
					bgcolor: '#1565c0',
					p: 4,
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
				}}
				component="footer"
			>
				<Link
					sx={{ margin: '0 10px' }}
					href="https://co.linkedin.com/in/ingortizh"
					color="#ffffff"
				>
					<LinkedIn />
				</Link>
				<Link
					sx={{ margin: '0 10px' }}
					href="https://github.com/JuanOrtiz9492"
					color="#ffffff"
				>
					<GitHub />
				</Link>
			</Box>
			{/* End footer */}
		</ThemeProvider>
	);
}
