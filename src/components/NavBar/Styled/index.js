import { ButtonGroup, Typography, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmStyled from '@emotion/styled';

const StyledButtonGroup = styled(ButtonGroup)`
	& .MuiButton-root {
		border-color: white;
		color: white;
		&:hover {
			border: 1px solid;
		}
	}
	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

const Title = styled(Typography)`
	&.MuiTypography-h1 {
		font-size: 2em;
		text-transform: uppercase;
		@media only screen and (max-width: 600px) {
			font-size: 1.5em;
		}
	}
`;

const Container = styled(Toolbar)`
	justify-content: space-between;
	height: 9vh;
`;

const ButtonGroupMobile = EmStyled.div`
	display: none;
	@media only screen and (max-width: 600px) {
		display: block
	}
`;
export { StyledButtonGroup, Title, Container, ButtonGroupMobile };
