import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {
  roseColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  blackColor,
  grayColor,
  hexToRgb
} from "../common/assets/jss/material-dashboard-react.js";

const timelines = [
  {name: '托福截止', date: '2021/11/1'},
  {name: 'SAT截止', date: '2021/11/15'},
  {name: '申请截止', date: '2022/01/03'},
  {name: '申请结果', date: '2022/04/01'},
  {name: '接受Offer', date: '2022/05/01'},
  {name: '开学日期', date: '2022/10/01'},
]

const useStyles = makeStyles((theme) => ({
  timeline: {
    width: '80%'
  },
  paper: {
    padding: '6px 16px',
    backgroundColor: grayColor[0]
  },
  secondaryTail: {
    backgroundColor: grayColor[0],
  },
}));

export default function Deadlines() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography color="textSecondary">09/01/2022</Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>托福提交截止</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography color="textSecondary">10/01/2022</Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>SAT提交截止</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography color="textSecondary">11/01/2022</Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>申请提交截止</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography color="textSecondary">01/05/2023</Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>申请结果</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
            <Typography color="textSecondary">02/01/2023</Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>接受或拒绝Offer</TimelineContent>
      </TimelineItem>
    </Timeline>
    </React.Fragment>
  );
}