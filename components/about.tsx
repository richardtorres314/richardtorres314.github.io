import React from 'react';
import {
	Box,
	Container,
	Grid,
	makeStyles,
	Typography
	} from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	box: {
		borderLeft: `0.5em solid ${red[500]}`
	},
	headerColor: {
		color: red[500]
	},
	content: {
		order: 2,
		[theme.breakpoints.up('md')]: {
			order: 0
		}
	}
}));

export default function About() {
	const classes = useStyles();

	return (
		<Box p={2} id="about">
			<Container maxWidth="md">
				<Grid container justify="center" spacing={2}>
					<Grid item md className={classes.content}>
						<Box p={2} className={classes.box}>
							<Typography gutterBottom variant="h2"><span className={classes.headerColor}>Abo</span>ut Me</Typography>
							<Typography gutterBottom style={{ marginBottom: '1em' }}>Born in the bayous of Brooklyn, NY 🚕, I've devoted myself to being a life-long learner. A former STEM teacher, I'm a firm believer in the power of education 🧠.</Typography>
							<Typography gutterBottom style={{ marginBottom: '1em' }}>Working <strong>across the stack</strong> sparks joy ✨, though I've been known to be well versed in the dark arts of <strong>front-end engineering</strong> 💅.</Typography>
							<Typography>When I'm not at my keyboard, I enjoy cooking 🍳, running 🏃, and listening to podcasts 🎧.</Typography>
						</Box>
					</Grid>
					<Grid item>
						<Box display="flex">
							<img alt="Illustration of person thinking alongside laptop" style={{ maxWidth: '360px' }} src="undraw_code_thinking_1jeh.svg" />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
