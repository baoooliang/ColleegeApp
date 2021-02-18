import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Scores from './Scores'
import Questions from './Questions'
import Start from './Start'
import Confirmation from './Confirmation'
import Result from './Result'

const questions = [
  {question: '你打算去哪个国家留学？', options: ['美国'], type: 0},
  {question: '你打算申请几所大学？', options: ['5所以内', '5~10所', '10～15所', '15～20所'], type: 0},
  {question: '你想申请的学校类型？', options: ['大型公立', '文理学院', '私立', '小型公立'], type: 1},
  {question: '你想生活在哪个地区？', options: ['东部', '西部', '南部', '北部'], type: 1},
  {question: '你想去中国留学生多多学校吗？', options: ['是的', '不是'], type: 1},
  {question: '你想未来的专业方向？', options: ['工程', '科学/数学', '艺术', '体育', '医药'], type: 1},
  {question: '你喜欢生活在城市还是郊区？', options: ['城市', '郊区'], type: 1},
  {question: '你的每年留学预算是多少？', options: ['3万美金', '5万美金', '8万美金', '不差钱'], type: 1}
]

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(1),
  },
}));

const questionEnd = questions.length + 2

const getStage = (stage) => {
  switch (stage) {
    case 0:
      return <Start />;
    case 1:
      return <Scores />;
    case questionEnd:
      return <Confirmation />
    case questionEnd + 1:
      return <Result />
    default:
      return <Questions question={questions[stage - 2]}/>;
  }
}

export default function Match() {
  const classes = useStyles();
  const [stage, setStage] = React.useState(0)

  const onNextClick = () => {
    setStage(prevState => prevState + 1)
  }

  const onBackClick = () => {
    setStage(prevState => prevState - 1)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <React.Fragment>
            {getStage(stage)}
            <div className={classes.buttons}>
              {stage !== 0 && stage !== questionEnd + 1  && (
                    <Button onClick={onBackClick} className={classes.button}>
                      Back
                    </Button>
                  )}
              {stage === questionEnd + 1  && (
                    <Button onClick={onBackClick} className={classes.button}>
                      再选一次！
                    </Button>
                  )}
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={onNextClick}
              >
                {stage === 0 ? 'Go!' : (stage === questionEnd ? 'Submit' : (stage === questionEnd + 1 ? '加进我的学校清单' : 'Next'))}
              </Button>
            </div>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
