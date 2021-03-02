import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import HomeIcon from '@material-ui/icons/Home';
import TodayIcon from '@material-ui/icons/Today';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Card from "../common/components/Card/Card.js";
import CardBody from "../common/components/Card/CardBody.js";
import CardHeader from "../common/components/Card/CardHeader.js";
import CardIcon from "../common/components/Card/CardIcon.js";
import CardAvatar from "../common/components/Card/CardAvatar.js";
import styles from "../common/assets/jss/material-dashboard-react/views/userProfileStyles.js";
import MapChart from './Map';
import Avatar from '@material-ui/core/Avatar';
import GridContainer from "../common/components/Grid/GridContainer.js";
import GridItem from "../common/components/Grid/GridItem.js";
import PermIdentity from "@material-ui/icons/PermIdentity";


const useStyles = makeStyles(styles);
const state = 'NY'

export default function BasicInfo(props){
  const {attributes} = props
  const classes = useStyles();
  return (
    <Card>
            <CardHeader color="rose" icon>
                <CardIcon color="rose">
                    <PermIdentity />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  基本信息 - <small>Basic Information</small>
                </h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                 <List className={classes.attributes}>
                  <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <HomeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={"创立年份"} secondary={attributes['foundYear']} />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <TodayIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={"学期制度"} secondary={attributes['schoolCalendar']} />
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
                    </List>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <List className={classes.attributes}>
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
                </GridItem>
              </GridContainer>
              <MapChart state={state} />
            </CardBody>
            </Card>
  )
}