import experiences from '../data/experience.json';
import React, { Fragment } from 'react';
import {
	Avatar,
	Box,
	Container,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Typography
	} from '@material-ui/core';
import { Done } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	header: {
		color: red[500]
	},
	logo: {
		objectFit: 'contain'
	},
	duties: {
		paddingLeft: '1em'
	},
	duty: {
		paddingBottom: '0.5em'
	},
	dutyIcon: {
		minWidth: '32px'
	}
}));

export default function Experience() {
	const classes = useStyles();

	return (
		<Box py={4} px={2} id="experience">
			<Container maxWidth="md">
				<Typography variant="h2" gutterBottom align="center"><span className={classes.header}>Exp</span>erience</Typography>
				<List>
					{experiences.map((experience, index) => (
						<Fragment key={`experience-${index}`}>
							<ListItem divider={index !== experiences.length - 1}>
								<Box width="100%" py={2}>
									<Grid container spacing={1}>
										<Grid item>
											<Avatar
												alt={`${experience.company} Logo`}
												classes={{ img: classes.logo }}
												src={experience.logo}
												variant="square"
											/>
										</Grid>
										<Grid item xs>
											<Box pb={2}>
												<Grid container>
													<Grid item xs={6}>
														<Typography style={{ fontWeight: 'bold' }}>{experience.company}</Typography>
													</Grid>
													<Grid item xs={6}>
														<Typography color="secondary" align="right">{experience.location}</Typography>
													</Grid>
												</Grid>
												<Grid container>
													<Grid item xs={6}>
														<Typography style={{ fontVariant: 'small-caps', fontWeight: 500 }} color="textSecondary">{experience.title}</Typography>
													</Grid>
													<Grid item xs={6}>
														<Typography style={{ fontStyle: 'italic', fontSize: '0.9em' }} align="right" color="textSecondary">{experience.dates}</Typography>
													</Grid>
												</Grid>
											</Box>
											<List>
												{experience.duties.map((duty, index) => (
													<Fragment key={`duty-${index}`}>
														<ListItem alignItems="flex-start">
															<ListItemIcon className={classes.dutyIcon}>
																<Done fontSize="small" />
															</ListItemIcon>
															<ListItemText primary={duty} />
														</ListItem>
													</Fragment>
												))}
											</List>
										</Grid>
									</Grid>
								</Box>
							</ListItem>
						</Fragment>
					))}
				</List>
			</Container>
		</Box>
	);
}
