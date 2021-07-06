import React from 'react';
import {
	Box,
	Container,
	makeStyles,
	Typography
	} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	box: {
		backgroundColor: grey[900],
		color: grey[500],
		fontWeight: 300,
		fontSize: '0.9em'
	}
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<Box pb={4} pt={2} className={classes.box}>
			<footer>
				<Container maxWidth="md">
					<Typography align="center">Made in Boston • Richard Torres</Typography>
				</Container>
			</footer>
		</Box>
	);
}
