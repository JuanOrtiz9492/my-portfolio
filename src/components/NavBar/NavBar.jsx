import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';
import * as Styled from './Styled';

function NavBar({ onButtonClick }) {
	return (
		<AppBar position="relative">
			<Styled.Container>
				<Styled.Title variant="h1" color="inherit" noWrap>
					Juan David Ortiz
				</Styled.Title>
				<Styled.StyledButtonGroup
					variant="outlined"
					aria-label="outlined button group"
				>
					<Button name="about" onClick={onButtonClick}>
						about me
					</Button>
					<Button name="projects" onClick={onButtonClick}>
						projects
					</Button>
					<Button name="contactme" onClick={onButtonClick}>
						contact me
					</Button>
				</Styled.StyledButtonGroup>
			</Styled.Container>
		</AppBar>
	);
}

export default NavBar;

NavBar.propTypes = {
	onButtonClick: PropTypes.func,
};

NavBar.defaultProps = {
	onButtonClick: () => {},
};
