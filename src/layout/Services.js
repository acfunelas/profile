
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({
	serviceLogo: {
		maxWidth: "20% !important",
		maxHeight: "auto",
	},
	overlay: {
		position: "absolute",
		bottom: 0,
		left: "100%",
		right: 0,
		overflow: "hidden",
		width: 0,
		height: "100%",
		transition: ".5s ease",
		color: "white",
		backgroundColor: "rgba(0, 0, 0, .6)"
	},
	logoContainer: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		display: "flex",
		'&:hover': {
			'& $overlay': {
				width: "100%",
				left: 0,
			}
		},
		position: "relative"
	},
});

let Services = () => {
	const classes = useStyles();
	return (
		<div className="class-section" style={{backgroundColor: "white"}}>
			<Grid container>
				<Grid item xs={2}></Grid>
				<Grid item xs={8}>
					<Typography variant="h2">Services</Typography>
					<Grid container style={{marginTop: "5vh"}}>
						<Grid item xs={4} style={{backgroundColor: "#87d3ed", minHeight: "60vh"}} className={classes.logoContainer} >
							<img src="/images/coding.png" alt="software development icon" className={classes.serviceLogo}/>
							<Typography variant="h5">Software Development</Typography>
							<div className={classes.overlay} id="test">
								<div className="text">Hello World</div>
							</div>
						</Grid>
						<Grid item xs={4} container>
							<Grid item xs={12} style={{backgroundColor: "#48BA7F"}} className={classes.logoContainer} >
								<img src="/images/ui-design.png" alt="" className={classes.serviceLogo}/>
								<Typography variant="h5">UI/UX Design</Typography>
							</Grid>
							<Grid item xs={12} style={{backgroundColor: "#e6ef9e"}} className={classes.logoContainer} >
								<img src="/images/consultation.png" alt="consultation services icon" className={classes.serviceLogo}/>
								<Typography variant="h5">Consultation Services</Typography>
							</Grid>
						</Grid>
						<Grid item xs={4}  container>
							<Grid item xs={12} style={{backgroundColor: "#f27e5e"}} className={classes.logoContainer} >
								<img src="/images/graphics design.png" alt="ui/ux icon" className={classes.serviceLogo}/>
								<Typography variant="h5">Graphic Design</Typography>
							</Grid>
							<Grid item xs={12} style={{backgroundColor: "#d2b6f9"}} className={classes.logoContainer} >
								<img src="/images/tester.png" alt="testing services icon" className={classes.serviceLogo}/>
								<Typography variant="h5">Game and Software Testing</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={2}></Grid>
			</Grid>
		</div>
	)
}

export default Services;