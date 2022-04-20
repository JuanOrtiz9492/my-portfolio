import styled from '@emotion/styled';

const ModalBody = styled.div`
	display: flex;
	flex-direction: row;
	& img {
		width: 500px;
	}

	& p {
		width: 30em;
		margin-left: 3em;
		text-align: justify;
	}
`;

const ImgContainer = styled.div`
	width: 500px;
	& img {
		width: 500px;
	}
`;

export { ModalBody, ImgContainer };
