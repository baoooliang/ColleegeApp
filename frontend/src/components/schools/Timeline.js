import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

const timelines = [
  {name: '托福截止', date: '2021/11/1'},
  {name: 'SAT截止', date: '2021/11/15'},
  {name: '申请截止', date: '2022/01/03'},
  {name: '申请结果', date: '2022/04/01'},
  {name: '接受Offer', date: '2022/05/01'},
  {name: '开学日期', date: '2022/10/01'},
]

export default function Deadlines() {
  return (
    <React.Fragment>
      <Timeline align="alternate">
        {timelines.map((t, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography color="textSecondary">{t.date}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>{t.name}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </React.Fragment>
  );
}