import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

let Home = () => {
	const videoBack = window.location.origin + '/images/videoback.mp4'
	return (
		<div>
			<h1 style={{textShadow: "5px 5px 10px black"}}>TURN YOUR IDEAS<br/>INTO REALITY</h1>
			<Typography color="secondary">Do you have any wild idea you want to materialize? I'd love to hear about it!</Typography>
			<Button variant="contained" color="primary" style={{padding: "14px 30px"}}>Let's Collaborate</Button>
			<video autoPlay muted loop id="vin-funelas-portfolio">
				<source src={videoBack} type="video/mp4" />
			</video>
		</div>
	)

}

export default Home;