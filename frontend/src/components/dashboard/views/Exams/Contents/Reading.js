import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import Card from "../../../components/Card/Card.js";
import CardIcon from "../../../components/Card/CardIcon.js";
import CardBody from "../../../components/Card/CardBody.js";
import Paper from '@material-ui/core/Paper';
import { test1 } from '../Data/Reading1';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(1),
    width: '100%',
    height: theme.spacing(100),
    overflow: 'auto'
  },
  content: {
    padding: theme.spacing(5)
  },
  formControl: {
    marginTop: theme.spacing(10),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    height: '80%'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    height: '5%'
  }
})
);

export default function Reading(){
  const classes = useStyles()
  const [index, setIndex] = React.useState(0)

  const onNextClick = () => {
    setIndex(index + 1)
  }

  const onBackClick = () => {
    setIndex(index - 1)
  }

  return (
    <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Paper className={classes.section}>
            <p className={classes.content}>
              {test1.article}
            </p>
          </Paper>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Paper className={classes.section}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">{test1.questions[index].question}</FormLabel>
                <FormGroup>
                {
                  test1.questions[index].options.map((option, index) => (
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
              <div className={classes.buttons}>
                  <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    {index !== 0 && <Button onClick={onBackClick}>Prev</Button>}
                    {index < test1.questions.length -1  && <Button onClick={onNextClick}>Next</Button>}
                  </ButtonGroup>
              </div>
          </Paper>
        </GridItem>
      </GridContainer>

  )
}