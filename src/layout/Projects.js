import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

const useStyles = makeStyles({
	techStackLogo: {
		maxWidth: "80% !important",
	},
	techStack: {
		maxWidth: "20% !important"
	},
	projImage: {
		minWidth: "100% !Important"
	}
});

function ProjectCarousel(props) {
	var items = [
		{
			name: "Fluma",
			description: `A new normal mobile application that enables users to quickly and effectively log their information when entering establishment premises. 
				The threat of contact from the pandemic is eliminated with the usage of contactless logging in and out of establishments.
			`,
			imgSrc: "/images/fluma.svg",
			imgDisplayLoc: "left", //left or right only
			technologyUsed: [
				'react native',
				'node',
				'mongo',
			],
			client: 'PASSION PROJECT'
		},
		{
			name: "E-Commerce Site",
			client: "MetroProperties",
			description: "An e-commerce platform for interested home buyers in the Philippines. Allows users to view, and check real estate properties as well as its amenities. Also allows administrators to manage their listings and customer inquiries which are linked to their social media account.	",
			imgSrc: "/images/metroproperties.svg",
			imgDisplayLoc: "right", //left or right only
			technologyUsed: [
				'ror',
				'mysql',
				'heroku'
			]
		},
		{
			name: "UI/UX Consultation",
			client: "Confidential",
			description: "Served as a consultant for UI and UX Design for a health and wellness e-commerce platform to cater medical needs in asia from consultantion to prescription.",
			imgSrc: "/images/health.svg",
			imgDisplayLoc: "left", //left or right only
			technologyUsed: [
				'figma',
				'sketch'
			]
		},
	]

	return (
		<Carousel>
			{
				items.map( (item, i) => <Item key={i} item={item} /> )
			}
		</Carousel>
	)
}

function Item(props) {
	const classes = useStyles();
	const {name, description, imgSrc, imgDisplayLoc, technologyUsed, client} = props.item

	return (
		<div style={{minHeight: "65vh"}}>
			<Grid container>
				{imgDisplayLoc === "left" && (
					<Grid item md={6}>
						<img src={imgSrc} alt={name} className={classes.projImage} />
					</Grid>
				)}
				<Grid item md={6}>	
					<Typography variant="h1" color="primary">{name}</Typography>
					<Typography color="secondary">{client}</Typography>

					<Typography variant="h5" style={{textAlign: "left", marginBottom: 20, marginTop: 20}}>Description</Typography>
					<p>{description}</p>
					<Typography variant="h5" style={{textAlign: "left", marginBottom: 20}}>Technologies Used</Typography>
					{technologyUsed.map((value, index) => 
						<img className={classes.techStack} key={index} src={`/images/${value} logo.png`} alt={value} /> )
					}
				</Grid>
				{imgDisplayLoc === "right" && (
					<Grid item md={6}>
						<img src={imgSrc} alt={name} className={classes.projImage} />
					</Grid>
				)}
			</Grid>
		</div>
	)
}

let Projects = () => {
	return (
		<div className="class-section" style={{backgroundColor: "#efefef"}}>
			<Grid container>
				<Grid item xs={2}></Grid>
				<Grid item xs={8}>
					<ProjectCarousel />
				</Grid>
				<Grid item xs={2}></Grid>
			</Grid>
		</div>
	)
}

export default Projects;