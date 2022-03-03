import { ButtonGroup, Typography, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButtonGroup = styled(ButtonGroup)`
	& .MuiButton-root {
		border-color: white;
		color: white;
		&:hover {
			border: 1px solid;
		}
	}
`;

const Title = styled(Typography)`
	&.MuiTypography-h1 {
		font-size: 2em;
		text-transform: uppercase;
	}
`;

const Container = styled(Toolbar)`
	justify-content: space-between;
	height: 9vh;
`;
export { StyledButtonGroup, Title, Container };
