import React from 'react';
import {
	Box,
	Container,
	Grid,
	Link,
	makeStyles,
	Typography
	} from '@material-ui/core';
import { Email, GitHub, Twitter } from '@material-ui/icons';
import { grey, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	link: {
		'&:hover': {
			color: grey[50]
		},
		color: grey[400]
	},
	box: {
		backgroundColor: grey[900],
		color: grey[50]
	},
	headerRed: {
		color: red[500]
	}
}));

export default function Contact() {
	const classes = useStyles();

	return (
		<Box pt={4} pb={2} className={classes.box} textAlign="center" id="contact">
			<Container maxWidth="md">
				<Typography variant="h2" gutterBottom><span className={classes.headerRed}>Con</span>tact Me</Typography>
				<Typography gutterBottom>Let's work together! Contact me and I'll get back to you shortly 😊</Typography>
				<Box py={2}>
					<Grid container spacing={2} justify="center">
						<Grid item>
							<Link
								href="https://www.github.com/richardtorres314"
								target="_blank"
								rel="noreferrer"
								className={classes.link}
							>
								<GitHub fontSize="large" />
							</Link>
						</Grid>
						<Grid item>
							<Link
								href="https://www.twitter.com/rtorr05"
								target="_blank"
								rel="noreferrer"
								className={classes.link}
							>
								<Twitter fontSize="large" />
							</Link>
						</Grid>
						<Grid item>
							<Link
								href="mailto:richardtorres314@gmail.com"
								className={classes.link}
							>
								<Email fontSize="large" />
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
