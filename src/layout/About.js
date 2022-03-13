import * as React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
const steps = [
	'Vin Today',
	'Vin as Developer',
	'Vin as a Student',
];

const workData = [
  {
    label: 'Sr. Software Developer (Jan 2022 - Present)',
    description: `Currently working at Accenture PH as part of their Japanese Arm focusing on software development using React and NodeJS.`,
  },
  {
    label: 'Software Development Jr. Manager (Dec 2018 - Dec 2021)',
    description:
      `Responsible for managing Special projects and Rnd projects for Jeonsoft Corporation.
			Used a plethora of programming languages including but are not limited to Ruby on Rails, Python, NodeJS and ReactJS`,
  },
];

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

const ToDate = (props) => {
	const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

	return (
		<>
			<Grid item xs={6}>
				<img src="/images/working.svg" alt="working" />
			</Grid>
			<Grid item xs={6}>
				<Typography variant='h3' style={{marginTop: "12vh"}}>Work Experience</Typography>
				<Stepper activeStep={activeStep} orientation="vertical">
        {workData.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
				</Stepper>
				{activeStep === steps.length && (
					<Paper square elevation={0} sx={{ p: 3 }}>
						<Typography>All steps completed - you&apos;re finished</Typography>
						<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
							Reset
						</Button>
					</Paper>
				)}
			</Grid>
		</>
	)
}

let About = () => {
	// const classes = useStyles();
	return (
		<div className="class-section" style={{backgroundColor: "#efefef"}}>
			<Grid container>
				<Grid item xs={2}></Grid>
				<Grid item xs={8} container>
					<Grid item xs={12}>
						<Stepper activeStep={1} alternativeLabel>
							{steps.map((label) => (
								<Step key={label}>
									<StepLabel>{label}</StepLabel>
								</Step>
							))}
						</Stepper>
					</Grid>

					<ToDate />
				</Grid>
				<Grid item xs={2}></Grid>
			</Grid>
		</div>
	)
}

export default About;