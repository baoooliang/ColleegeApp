import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import withRoot from '../../home/modules/withRoot';
import Slogan from './Slogan';
import WorkFlow from './WorkFlow';

function start(props){

return (
 <React.Fragment>
   <Slogan />
   <WorkFlow onStartClick={props.onStartClick}/>
 </React.Fragment>
);
}

export default withRoot(start);