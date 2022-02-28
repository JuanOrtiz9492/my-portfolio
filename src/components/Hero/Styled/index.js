import styled from '@emotion/styled';
import { styled as muiStyled } from '@mui/material/styles';
import { Avatar } from '@mui/material';

const Container = styled.div`
	width: 100vw;
	height: 15vh;
	display: flex;
	flex-direction: column;
	margin: 2em 0;
`;

const StyledAvatar = muiStyled(Avatar)`
	&.MuiAvatar-root {
		width: 15vh;
    height: 15vh;
    align-self: center;
	}
`;

export { Container, StyledAvatar };
