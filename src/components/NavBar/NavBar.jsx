import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { waLink } from '../../utils/constants';
import * as Styled from './Styled';

function NavBar({ onButtonClick }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
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
					<Button onClick={() => onButtonClick('about')}>about me</Button>
					<Button onClick={() => onButtonClick('projects')}>projects</Button>
					<Button onClick={() => window.open(waLink, '_blank')}>
						contact me
					</Button>
				</Styled.StyledButtonGroup>
				<Styled.ButtonGroupMobile>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={handleClick}
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="demo-positioned-menu"
						aria-labelledby="demo-positioned-button"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
					>
						<MenuItem
							name="about"
							onClick={() => {
								handleClose();
								onButtonClick('about');
							}}
						>
							ABOUT ME
						</MenuItem>
						<MenuItem
							name="projects"
							onClick={() => {
								handleClose();
								onButtonClick('projects');
							}}
						>
							PROJECTS
						</MenuItem>
						<MenuItem
							name="contactme"
							onClick={() => {
								handleClose();
								window.open(waLink, '_blank');
							}}
						>
							CONTACT ME
						</MenuItem>
					</Menu>
				</Styled.ButtonGroupMobile>
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
