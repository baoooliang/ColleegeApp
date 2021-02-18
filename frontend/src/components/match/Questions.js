import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%'
  },
  formLabel: {
    marginBottom: theme.spacing(5),
    width: '100%',
    textAlign: 'center'
  },
  formGroup: {
    maxWidth:'60%',
    marginLeft: '40%'
  },
  sliderSection: {
    width: '100%'
  },
  sliderLabel: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '3%'
  },
  slider: {
    width: '60%',
    marginLeft: '20%'

  },
  divider: {
    marginTop: '5%',
    marginBottom: '5%'
  }
}));

const marks = [
  {
    value: 0,
    label: '不重要',
  },
  {
    value: 33,
    label: '一般',
  },
  {
    value: 66,
    label: '重要',
  },
  {
    value: 100,
    label: '非常重要',
  },
];

export default function Question(props) {
  const {question} = props
  const classes = useStyles()

  return (
    <>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" className={classes.formLabel}>{question.question}</FormLabel>
          <FormGroup className={classes.formGroup}>
          {
            question.options.map((option, index) => (
              <FormControlLabel
                key = {index}
                checked={false}
                control={<Checkbox name='option' />}
                label = {option}
              />
            ))
          }
          </FormGroup>
        </FormControl>
      {
        question.type === 1 &&
        <React.Fragment>
            <Divider variant="middle" className={classes.divider}/>
            <div className={classes.sliderSection}>
              <Typography id="discrete-slider-restrict" gutterBottom className={classes.sliderLabel}>
                这是个重要因素吗？
              </Typography>
              <Slider
                defaultValue={3}
                aria-labelledby="discrete-slider-restrict"
                step={null}
                valueLabelDisplay="auto"
                marks={marks}
                className={classes.slider}
              />
            </div>
        </React.Fragment>
      }
    </>
  );
}
