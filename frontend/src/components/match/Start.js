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

export default function Start() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Stepper className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography variant="subtitle1">
        回答下面问题，我们运用智能算法帮你选出合适的学校
        <br /><br />
        Are you ready? Lets go!
      </Typography>
    </React.Fragment>
  );
}