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
	position: relative;
	align-self: center;
	margin: 0 auto;
	width: 50vh;
	height: 50vh;
	background-color: #fff;
	border-radius: 3%;
`;

const ExitBtn = styled.button`
	top: 6%;
	right: 2%;
	transform: translate(-50%, -50%);
	width: 18px;
	height: 18px;
	background-color: transparent;
	border: none;
	position: absolute;
	&:hover {
		cursor: pointer;
	}
	&::after {
		content: '';
		left: 0;
		border-top: solid 4px #666;
		width: 18px;
		position: absolute;
		transform: rotate(45deg);
	}
	&::before {
		content: '';
		left: 0;
		border-bottom: solid 4px #666;
		width: 18px;
		position: absolute;
		transform: rotate(-45deg);
	}
`;

const ModalHeader = styled.div`
	width: 100%;
	& h2 {
		text-align: center;
		text-transform: uppercase;
	}
`;

const ModalFooter = styled.div`
	width: 70%;
	left: 15%;
	position: absolute;
	bottom: 5%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export { Container, ModalContainer, ExitBtn, ModalHeader, ModalFooter };
