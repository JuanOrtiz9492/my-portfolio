import React from 'react';
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

import { cards } from '../../utils/constants';

function Grid() {
	const visitAction = (url) => {
		window.open(url, '_blank');
	};
	return (
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
								<Button size="small">Edit</Button>
							</CardActions>
						</Card>
					</MuiGrid>
				))}
			</MuiGrid>
		</Container>
	);
}

export default Grid;
