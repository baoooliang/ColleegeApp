import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Start from './start/Start'
import Steps from './steps/Steps'
import Result from './steps/Result'


function Match() {
  const [stage, setStage] = React.useState(0)
  const onStartClick = () => {
    setStage(stage+1)
  }

  return (
    <React.Fragment>
      {stage === 0 ? <Start onStartClick={onStartClick}/> : <Steps/>}
    </React.Fragment>
  );
}

export default Match;
