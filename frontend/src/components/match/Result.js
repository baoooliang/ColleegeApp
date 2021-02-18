import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '70%',
    marginLeft: '10%',
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    textAlign: 'center'
  }
}));

const steps = ['回答问题', '智能选校', '加入学校清单']

const topSchools = [
  {id: '1', name: 'Princeton University', label: '普林斯顿大学'},
  {id: '2', name: 'Harvard University', label: '哈佛大学'},
  {id: '3', name: 'Stanford University', label: '斯坦福大学'},
  {id: '4', name: 'Chicago University', label: '芝加哥大学'}
]

const coreSchools = [
  {id: '5', name: 'UC San Diego', label: '加州大学圣地亚哥分校'},
  {id: '6', name: 'UC Los Angeles', label: '加州大学洛杉矶分校'},
  {id: '7', name: 'University of Florida', label: '佛罗里达大学'},
  {id: '8', name: 'Seattle University', label: '西雅图大学'},
  {id: '9', name: 'University of Colorado', label: '科罗拉多大学'}
]

const baseSchools = [
  {id: '10', name: 'Boston University', label: '波士顿大学'},
  {id: '11', name: 'Florida State University', label: '佛罗里达州立大学'},
  {id: '12', name: 'University of Washington', label: '华盛顿大学'},
  {id: '13', name: 'Fordham University', label: '佛德汉姆大学'}
]

export default function Result() {
  const classes = useStyles();

  return (
  <>
    <Stepper className={classes.stepper} activeStep={2}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography variant="subtitle1" className={classes.title}>
        以下是我们为你选择的学校。请将心仪的学校加入你的学校清单！
        <br /><br />
      </Typography>
    <List dense className={classes.root} subheader={<ListSubheader>冲刺学校</ListSubheader>}>
      {topSchools.map((school) => {
        const labelId = `checkbox-list-secondary-label-${school.id}`;
        return (
          <ListItem key={school.id} button>
            <ListItemText id={school.id} primary={school.label} secondary={school.name}/>
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                //onChange={handleToggle(value)}
                checked={false}
                inputProps={{ 'aria-labelledby': school.id }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    <List dense className={classes.root} subheader={<ListSubheader>核心学校</ListSubheader>}>
      {coreSchools.map((school) => {
        const labelId = `checkbox-list-secondary-label-${school.id}`;
        return (
          <ListItem key={school.id} button>
            <ListItemText id={school.id} primary={school.label} secondary={school.name}/>
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                //onChange={handleToggle(value)}
                checked={false}
                inputProps={{ 'aria-labelledby': school.id }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    <List dense className={classes.root} subheader={<ListSubheader>保底学校</ListSubheader>}>
      {baseSchools.map((school) => {
        const labelId = `checkbox-list-secondary-label-${school.id}`;
        return (
          <ListItem key={school.id} button>
            <ListItemText id={school.id} primary={school.label} secondary={school.name}/>
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                //onChange={handleToggle(value)}
                checked={false}
                inputProps={{ 'aria-labelledby': school.id }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    </>
  );
}
