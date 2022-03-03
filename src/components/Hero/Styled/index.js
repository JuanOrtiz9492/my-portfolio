import styled from '@emotion/styled';
import { styled as muiStyled } from '@mui/material/styles';
import { Avatar } from '@mui/material';

const Container = styled.div`
	width: 100%;
	height: 20vh;
	display: flex;
	flex-direction: column;
	margin: 3em 0 2em 0;
`;

const StyledAvatar = muiStyled(Avatar)`
	&.MuiAvatar-root {
		width: 20vh;
    height: 20vh;
    align-self: center;
	}
`;

export { Container, StyledAvatar };
