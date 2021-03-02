import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

// @material-ui/icons
import PermIdentity from "@material-ui/icons/PermIdentity";

// core components
import GridContainer from "../common/components/Grid/GridContainer.js";
import GridItem from "../common/components/Grid/GridItem.js";
import Button from "../common/components/CustomButtons/Button.js";
import CustomInput from "../common/components/CustomInput/CustomInput.js";
import Card from "../common/components/Card/Card.js";
import CardBody from "../common/components/Card/CardBody.js";
import CardHeader from "../common/components/Card/CardHeader.js";
import CardIcon from "../common/components/Card/CardIcon.js";
import CardAvatar from "../common/components/Card/CardAvatar.js";
import Gallery from "./Gallery.js";
import styles from "../common/assets/jss/material-dashboard-react/views/userProfileStyles.js";

import Stats from './Stats';
import Introduction from './Introduction';
import BasicInfo from './BasicInfo';
import Timeline from './Timeline';

const state = 'NY'

const useStyles = makeStyles(styles);

const attributes = {
    'summerTemperature': 25,
    'winterTemperature': 3,
    'location': '东海岸',
    'state': '纽约州',
    'city': '纽约',
    'schoolCalendar': '学期制',
    'foundYear': 1890,
  };

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardBody>
              <Gallery />
            </CardBody>
          </Card>
          <Stats />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Introduction />
          <BasicInfo attributes={attributes}/>
        </GridItem>
      </GridContainer>
    </div>
  );
}
