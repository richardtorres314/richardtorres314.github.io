import React from 'react';
import {
	amber,
	deepOrange,
	green,
	grey,
	lightBlue,
	orange,
	purple,
	red,
	teal
	} from '@material-ui/core/colors';
import {
	Box,
	Chip,
	Container,
	Grid,
	makeStyles,
	Paper,
	Typography
	} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	tertiary: {
		backgroundColor: green[500],
		color: 'white'
	},
	quaternary: {
		backgroundColor: purple[500],
		color: 'white'
	},
	quinary: {
		backgroundColor: orange[500],
		color: 'white'
	},
	senary: {
		backgroundColor: lightBlue[500],
		color: 'white'
	},
	septenary: {
		backgroundColor: deepOrange[500],
		color: 'white'
	},
	octonary: {
		backgroundColor: teal[500],
		color: 'white'
	},
	nonary: {
		backgroundColor: amber[500],
		color: 'white'
	},
	denary: {
		backgroundColor: grey[800],
		color: 'white'
	},
	header: {
		color: red[500]
	},
	box: {
		backgroundColor: grey[100]
	}
}));

export default function Skills() {
	const classes = useStyles();

	return (
		<Box className={classes.box} p={4} id="skills">
			<Container>
				<Typography
					align="center"
					gutterBottom
					variant="h2"
				>
					<span className={classes.header}>Ski</span>lls
				</Typography>
				<Grid container spacing={1} justify="center">
					<Grid item xs={12} md>
						<Paper square>
							<Box p={2} textAlign="center">
								<Typography variant="h3" gutterBottom>Front-End</Typography>
								<Grid container spacing={1}>
									<Grid item>
										<Typography>Libraries</Typography>
									</Grid>
									<Grid item>
										<Grid container spacing={1}>
											<Grid item>
												<Chip label="React" className={classes.tertiary} />
											</Grid>
											<Grid item>
												<Chip label="Redux" className={classes.tertiary} />
											</Grid>
											<Grid item>
												<Chip label="Enzyme" className={classes.tertiary} />
											</Grid>
										</Grid>
									</Grid>
								</Grid>
								<Grid container spacing={1}>
									<Grid item>
										<Typography>Tools</Typography>
									</Grid>
									<Grid item>
										<Grid container spacing={1}>
											<Grid item>
												<Chip label="Webpack" className={classes.septenary} />
											</Grid>
											<Grid item>
												<Chip label="PostCSS" className={classes.septenary} />
											</Grid>
										</Grid>
									</Grid>
								</Grid>
								<Grid container spacing={1}>
									<Grid item>
										<Typography>Design Systems</Typography>
									</Grid>
									<Grid item>
										<Grid container spacing={1}>
											<Grid item>
												<Chip label="Material" className={classes.nonary} />
											</Grid>
											<Grid item>
												<Chip label="Bootstrap" className={classes.nonary} />
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Box>
						</Paper>
					</Grid>
					<Grid item xs={12} md>
						<Paper square>
							<Box p={2}>
								<Typography variant="h3" gutterBottom align="center">Across the Stack</Typography>
								<Grid container spacing={1}>
									<Grid item>
										<Typography>Languages</Typography>
									</Grid>
									<Grid item>
										<Grid container spacing={1}>
											<Grid item>
												<Chip label="TypeScript/JavaScript" color="primary" />
											</Grid>
											<Grid item>
												<Chip label="Python" color="primary" />
											</Grid>
										</Grid>
									</Grid>
								</Grid>
								<Grid container spacing={1}>
									<Grid item>
										<Typography>APIs</Typography>
									</Grid>
									<Grid item>
										<Grid container spacing={1}>
											<Grid item>
												<Chip label="REST" className={classes.quinary} />
											</Grid>
											<Grid item>
												<Chip label="GraphQL" className={classes.quinary} />
											</Grid>
										</Grid>
									</Grid>
								</Grid>
								<Grid container spacing={1}>
									<Grid item>
										<Typography>IaaS/PaaS</Typography>
									</Grid>
									<Grid item>
										<Grid container spacing={1}>
											<Grid item>
												<Chip label="AWS" className={classes.octonary} />
											</Grid>
											<Grid item>
												<Chip label="Heroku" className={classes.octonary} />
											</Grid>
											<Grid item>
												<Chip label="Google App Engine" className={classes.octonary} />
											</Grid>
										</Grid>
									</Grid>
								</Grid>
								<Grid container spacing={1}>
									<Grid item>
										<Typography>Testing</Typography>
									</Grid>
									<Grid item>
										<Grid container spacing={1}>
											<Grid item>
												<Chip label="Jest" className={classes.senary} />
											</Grid>
											<Grid item>
												<Chip label="Mocha" className={classes.senary} />
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Box>
						</Paper>
					</Grid>
					<Grid item xs={12} md>
						<Paper square>
							<Box p={2}>
								<Typography variant="h3" gutterBottom align="center">Back-End</Typography>
								<Grid container spacing={1}>
									<Grid item>
										<Typography>Databases</Typography>
									</Grid>
									<Grid item>
										<Grid container spacing={1}>
											<Grid item>
												<Chip label="PostgresSQL" color="secondary" />
											</Grid>
											<Grid item>
												<Chip label="MySQL" color="secondary" />
											</Grid>
											<Grid item>
												<Chip label="MongoDB" color="secondary" />
											</Grid>
										</Grid>
									</Grid>
								</Grid>
								<Grid container spacing={1}>
									<Grid item>
										<Typography>Frameworks</Typography>
									</Grid>
									<Grid item>
										<Grid container spacing={1}>
											<Grid item>
												<Chip label="Express.js" className={classes.quaternary} />
											</Grid>
											<Grid item>
												<Chip label="hapi.js" className={classes.quaternary} />
											</Grid>
										</Grid>
									</Grid>
								</Grid>
								<Grid container spacing={1}>
									<Grid item>
										<Typography>ORMs</Typography>
									</Grid>
									<Grid item>
										<Grid container spacing={1}>
											<Grid item>
												<Chip label="TypeORM" className={classes.denary} />
											</Grid>
											<Grid item>
												<Chip label="Mongoose" className={classes.denary} />
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
