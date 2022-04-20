import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import * as Styled from './Styled';

function Modal({
	title,
	body,
	primaryAction,
	primaryLabel,
	secondaryAction,
	secondaryLabel,
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

	const handlePrimaryButton = () => {
		primaryAction();
		closeModal();
	};

	const handleSecondButton = () => {
		secondaryAction();
		closeModal();
	};
	return (
		modalVisibility && (
			<Styled.Container>
				<Styled.ModalContainer>
					<Styled.ModalHeader>
						<h2>{title}</h2>
						<Styled.ExitBtn onClick={closeModal} />
					</Styled.ModalHeader>
					<Styled.BodyContainer>{body}</Styled.BodyContainer>
					<Styled.ModalFooter>
						{primaryAction && (
							<Button
								onClick={handlePrimaryButton}
								color="primary"
								variant="contained"
							>
								{primaryLabel}
							</Button>
						)}
						{secondaryAction && (
							<Button
								onClick={handleSecondButton}
								color="primary"
								variant="contained"
							>
								{secondaryLabel}
							</Button>
						)}
					</Styled.ModalFooter>
				</Styled.ModalContainer>
			</Styled.Container>
		)
	);
}

/* eslint-disable consistent-return */
Modal.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
	primaryAction: PropTypes.func,
	primaryLabel: PropTypes.string,
	secondaryAction: PropTypes.func,
	secondaryLabel: PropTypes.string,
	openModal: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
	primaryAction: undefined,
	primaryLabel: '',
	secondaryAction: undefined,
	secondaryLabel: '',
};

export default Modal;
