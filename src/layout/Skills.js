import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
	
const useStyles = makeStyles({
	techStackLogo: {
		maxWidth: "80% !important",
	}
});

let Skills = () => {
	const classes = useStyles();

	return (
		<div className="class-section" 
			style={{backgroundColor: "white",
				backgroundImage: "url(/images/white-background.png)",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover"
			}}>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant="h4">Working on technologies such as...</Typography>
        		</Grid>
				<Grid item xs={1}></Grid>
				<Grid item xs={10} container>
					<Grid item xs={2}>
						<img src="/images/react logo.png" className={classes.techStackLogo} alt="react logo" />
					</Grid>
					<Grid item xs={2}>
						<img src="/images/node logo.png" className={classes.techStackLogo} alt="node logo" />
					</Grid>
					<Grid item xs={2}>
						<img src="/images/ror logo.png" className={classes.techStackLogo} alt="ror logo" />
					</Grid>
					<Grid item xs={2}>
						<img src="/images/ms-sql logo.png" className={classes.techStackLogo} alt="ms sql logo" />
					</Grid>
					<Grid item xs={2}>
						<img src="/images/mysql logo.png" className={classes.techStackLogo} alt="mysql logo" />
					</Grid>
					<Grid item xs={2}>
						<img src="/images/postgre logo.png" className={classes.techStackLogo} alt="postgres logo" />
					</Grid>
				</Grid>
				<Grid item xs={1}></Grid>
			</Grid>
		</div>
	)
}

export default Skills;