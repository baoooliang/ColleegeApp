import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Stats from './Stats';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import HomeIcon from '@material-ui/icons/Home';
import TodayIcon from '@material-ui/icons/Today';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MapChart from './Map';
import Deadlines from './Timeline';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LinkIcon from '@material-ui/icons/Link';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import ComputerIcon from '@material-ui/icons/Computer';

const state = 'NY'

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  attributes: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  buttonGroup: {
    width: '80%'
  },
  button: {
    width: '100%',
    marginBottom: '8%'
  }
}));

function Sidebar(props) {
  const classes = useStyles();
  const { attributes, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <div className={classes.buttonGroup}>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<AddCircleIcon />}
          >
            加进我的学校清单
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<ComputerIcon />}
          >
            Offer计算器
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<DirectionsBusIcon />}
          >
            Virtual Campus Tour
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<LinkIcon />}
          >
            学校官网
          </Button>
      </div>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Attributes
      </Typography>
      <List className={classes.attributes}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <HomeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="创立年份" secondary={attributes['foundYear']} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <TodayIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="学期制度" secondary={attributes['schoolCalendar']} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WbSunnyIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="夏季气温" secondary={`${attributes['summerTemperature']} 摄氏度`} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AcUnitIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="冬季气温" secondary={`${attributes['winterTemperature']} 摄氏度`} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationOnIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="地理位置" secondary={attributes['location']} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationOnIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="州" secondary={attributes['state']} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationCityIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="城市" secondary={attributes['city']} />
        </ListItem>
      </List>
      <MapChart state={state} />
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        申请时间线 Timeline
      </Typography>
      <Deadlines />
    </Grid>
  );
}

Sidebar.propTypes = {
  attributes: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;
