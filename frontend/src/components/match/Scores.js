import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default function Scores() {
  //const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="sat"
            name="sat"
            label="SAT成绩或预计成绩"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
           required
            id="tofel"
            name="tofel"
            label="托福成绩或预计成绩"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="gpa"
            name="gpa"
            label="平时成绩"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
