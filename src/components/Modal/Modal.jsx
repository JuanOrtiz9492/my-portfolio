import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import * as Styled from './Styled';

function Modal({
	title,
	body,
	mainAction,
	secondaryAction,
	openModal,
	handleClose,
}) {
	const [modalVisibility, setModalVisibility] = useState(false);
	useEffect(() => {
		setModalVisibility(openModal);
	}, [openModal]);

	const closeModal = () => {
		setModalVisibility(false);
		handleClose();
	};

	return (
		modalVisibility && (
			<Styled.Container>
				<Styled.ModalContainer>
					<Styled.ModalHeader>
						<h2>{title}</h2>
						<Styled.ExitBtn onClick={closeModal} />
					</Styled.ModalHeader>
					{body}
					<Styled.ModalFooter>
						{mainAction && <Button>ok</Button>}
						{secondaryAction && <Button>cancel</Button>}
					</Styled.ModalFooter>
				</Styled.ModalContainer>
			</Styled.Container>
		)
	);
}

Modal.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
	mainAction: PropTypes.func,
	secondaryAction: PropTypes.func,
	openModal: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
	mainAction: undefined,
	secondaryAction: undefined,
};

export default Modal;
