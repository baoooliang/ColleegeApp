import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
  }
}));

const steps = ['回答问题', '智能选校', '加入学校清单']

export default function Confirmation() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Stepper className={classes.stepper} activeStep={1}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography variant="subtitle1">
        恭喜！你已经回答完所有问题！
        <br /><br />
      </Typography>
    </React.Fragment>
  );
}