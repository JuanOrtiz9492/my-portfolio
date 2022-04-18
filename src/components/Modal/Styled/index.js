import styled from '@emotion/styled';

const Container = styled.div`
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	background-color: rgba(127, 127, 127, 0.2);
`;

const ModalContainer = styled.div`
	align-self: center;
	margin: 0 auto;
	width: 50vh;
	height: 50vh;
	background-color: #fff;
`;

const ExitBtn = styled.button`
	width: 20px;
	height: 20px;
	background-color: transparent;
	border: none;
	position: relative;
	&:hover {
		cursor: pointer;
	}
	&::after {
		content: '';
		left: 0;
		border-top: solid 5px #666;
		width: 20px;
		position: absolute;
		transform: rotate(45deg);
	}
	&::before {
		content: '';
		left: 0;
		border-bottom: solid 5px #666;
		width: 20px;
		position: absolute;
		transform: rotate(-45deg);
	}
`;

const ModalHeader = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 10fr 1fr;
`;

const ModalFooter = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export { Container, ModalContainer, ExitBtn, ModalHeader, ModalFooter };
