import React, { useState } from 'react';
import {
	Grid as MuiGrid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Container,
	Button,
} from '@mui/material';
import * as Styled from './Styled';
import Modal from '../Modal';
import { cards } from '../../utils/constants';

const defaultModalProps = {
	title: '',
	body: null,
	primaryAction: undefined,
	primaryLabel: 'Close',
	secondaryAction: undefined,
	secondaryLabel: 'Visit',
	openModal: false,
};
function Grid() {
	const visitAction = (url) => {
		window.open(url, '_blank');
	};

	const [modalProps, setModalProps] = useState(defaultModalProps);
	const handleClose = () => {
		setModalProps(defaultModalProps);
	};

	const modalBody = (img, description, projectName) => (
		<Styled.ModalBody>
			<Styled.ImgContainer>
				<img src={img} alt={`project ${projectName}`} />
			</Styled.ImgContainer>

			<p>{description}</p>
		</Styled.ModalBody>
	);

	const renderModal = (id) => {
		const { projectName, img, description } = cards.find(
			({ id: cardId }) => id === cardId
		);
		setModalProps({
			...defaultModalProps,
			title: projectName,
			body: modalBody(img, description, projectName),
			primaryAction: () => {},
			openModal: true,
		});
	};

	return (
		<>
			<Container sx={{ py: 8 }} maxWidth="md">
				<MuiGrid container spacing={4}>
					{cards.map(({ id, projectName, sumary, img, isVisitable, url }) => (
						<MuiGrid item key={id} xs={12} sm={6} md={4}>
							<Card
								sx={{
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
								}}
							>
								<CardMedia
									component="img"
									sx={{
										// 16:9
										pt: '15%',
									}}
									image={img}
									alt="random"
								/>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography gutterBottom variant="h5" component="h2">
										{projectName}
									</Typography>
									<Typography>{sumary}</Typography>
								</CardContent>
								<CardActions>
									{isVisitable && (
										<Button size="small" onClick={() => visitAction(url)}>
											Visit
										</Button>
									)}
									<Button size="small" onClick={() => renderModal(id)}>
										More
									</Button>
								</CardActions>
							</Card>
						</MuiGrid>
					))}
				</MuiGrid>
			</Container>
			<Modal {...modalProps} handleClose={handleClose} />
		</>
	);
}

export default Grid;
