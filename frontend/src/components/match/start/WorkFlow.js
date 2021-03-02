import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '../../home/modules/components/Button';
import Typography from '../../home/modules/components/Typography';
import CreateIcon from '@material-ui/icons/Create';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import DescriptionIcon from '@material-ui/icons/Description';
import ProductHero from '../../home/modules/views/ProductHero';

const backgroundImage =
'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3302&q=80';

const styles = (theme) => ({
root: {
 display: 'flex',
 backgroundColor: theme.palette.secondary.light,
 overflow: 'hidden',
},
container: {
 marginTop: theme.spacing(10),
 marginBottom: theme.spacing(15),
 position: 'relative',
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'center',
},
item: {
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'center',
 padding: theme.spacing(0, 5),
},
title: {
 marginBottom: theme.spacing(14),
},
number: {
 fontSize: 24,
 fontFamily: theme.typography.fontFamily,
 color: theme.palette.secondary.main,
 fontWeight: theme.typography.fontWeightMedium,
},
image: {
 fontSize: '40px',
 marginTop: theme.spacing(4),
 marginBottom: theme.spacing(4),
},
curvyLines: {
 pointerEvents: 'none',
 position: 'absolute',
 top: -180,
 opacity: 0.7,
},
button: {
 marginTop: theme.spacing(8),
},
});

function Workflow(props) {
const { classes } = props;
const { onStartClick } = props;

return (
 <section className={classes.root}>
   <Container className={classes.container}>
     <Typography
       variant="h4"
       marked="center"
       className={classes.title}
       component="h2"
     >
       How it works
     </Typography>
     <div>
       <Grid container spacing={5}>
         <Grid item xs={12} md={4}>
           <div className={classes.item}>
             <div className={classes.number}>1.</div>
             <CreateIcon className={classes.image}/>
             <Typography variant="h5" align="center">
               填写问卷
             </Typography>
           </div>
         </Grid>
         <Grid item xs={12} md={4}>
           <div className={classes.item}>
             <div className={classes.number}>2.</div>
             <CloudDoneIcon className={classes.image}/>
             <Typography variant="h5" align="center">
               智能算法帮你选择合适的学校
             </Typography>
           </div>
         </Grid>
         <Grid item xs={12} md={4}>
           <div className={classes.item}>
             <div className={classes.number}>3.</div>
             <DescriptionIcon className={classes.image}/>
             <Typography variant="h5" align="center">
               把心仪的学校加入你的学校清单
             </Typography>
           </div>
         </Grid>
       </Grid>
     </div>
     <Button
       color="secondary"
       size="large"
       variant="contained"
       className={classes.button}
       component="a"
       onClick={onStartClick}
     >
       开始选校！
     </Button>
   </Container>
 </section>
);
}

Workflow.propTypes = {
classes: PropTypes.object.isRequired,
onStartClick: PropTypes.func
};

export default withStyles(styles)(Workflow);