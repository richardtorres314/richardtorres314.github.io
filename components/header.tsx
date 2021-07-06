import React, { Fragment } from 'react';
import {
	Avatar,
	Box,
	Grid,
	Link,
	makeStyles,
	Typography
	} from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	large: {
		width: theme.spacing(24),
		height: theme.spacing(24)
	},
	link: {
		display: 'inline-block',
		'&:hover': {
			borderBottom: '2px solid white'
		},
		'& .MuiTypography-root': {
			color: 'white',
			fontWeight: 700,
			fontSize: 24,
			fontVariant: 'small-caps'
		}
	},
	header: {
		fontWeight: 700
	},
	box: {
		backgroundColor: blue[500]
	},
	subheader: {
		fontSize: 28,
		fontWeight: 400,
		textTransform: 'uppercase',
		color: red[500]
	},
	linkList: {
		'& .MuiGrid-item:not(:last-child)': {
			position: 'relative',
			marginRight: '0.6em',
			'&::after': {
				content: `"•"`,
				position: 'absolute',
				fontSize: '1.5em',
				right: '-0.5rem',
				color: 'white',
				top: '0.5rem'
			}
		}
	}
}));

export default function Header() {
	const classes = useStyles();

	return (
		<Fragment>
			<Box className={classes.box} height={196} p={2}>
				<Grid container spacing={1} justify="flex-end" className={classes.linkList}>
					<Grid item>
						<Link href="#about" className={classes.link} underline="none">
							<Typography>About</Typography>
						</Link>
					</Grid>
					<Grid item>
						<Link href="#skills" className={classes.link} underline="none">
							<Typography>Skills</Typography>
						</Link>
					</Grid>
					<Grid item>
						<Link href="#experience" className={classes.link} underline="none">
							<Typography>Experience</Typography>
						</Link>
					</Grid>
					<Grid item>
						<Link href="#contact" className={classes.link} underline="none">
							<Typography>Contact</Typography>
						</Link>
					</Grid>
				</Grid>
			</Box>
			<Box mt={-14} p={2}>
				<Box display="flex" alignItems="center" flexDirection="column">
					<Avatar alt="Richard Torres" src="me.jpg" className={classes.large} />
					<Box py={2}>
						<Typography variant="h1" gutterBottom>Richard <span className={classes.header}>Torres</span></Typography>
						<Typography variant="h2" align="center" className={classes.subheader}>Software Engineer</Typography>
					</Box>
				</Box>
			</Box>
		</Fragment>
	);
}
