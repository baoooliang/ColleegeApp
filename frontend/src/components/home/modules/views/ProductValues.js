import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import CreateIcon from '@material-ui/icons/Create';
import SchoolIcon from '@material-ui/icons/School';
import DescriptionIcon from '@material-ui/icons/Description';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
  icon: {
    fontSize: '40px'
  },
  intro: {
    fontSize: '17px'
  }
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <CreateIcon className={classes.icon}/>
              <Typography variant="h6" className={classes.title}>
                高效备考
              </Typography>
              <Typography variant="h5" className={classes.intro}>
                {
                  '运用科学的方法加上智能工具帮助你提高标准化考试成绩。'
                }

                {
                  '记录以及跟踪你的刷题和单词记忆的进度，预测你的真实考试成绩。'
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <SchoolIcon className={classes.icon}/>
              <Typography variant="h6" className={classes.title}>
                智能选校
              </Typography>
              <Typography variant="h5" className={classes.intro}>
                {
                  '通过智能算法帮助你选出合适及心仪的学校。'
                }
                {
                  '虚拟校园浏览 - 在校学长学姐带你零距离感受校园环境'
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <DescriptionIcon className={classes.icon}/>
              <Typography variant="h6" className={classes.title}>
                辅助申请
              </Typography>
              <Typography variant="h5" className={classes.intro}>
                {'我们提供了大量美国学校的资料，让你更方便的了解学校的信息。'}
                {'专属于你的日程表，记录并且提醒你未完成的任务和近期日程。'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
