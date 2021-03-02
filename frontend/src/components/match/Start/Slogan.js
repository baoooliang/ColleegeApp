import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../home/modules/components/Button';
import Typography from '../../home/modules/components/Typography';
import ProductHeroLayout from '../../home/modules/views/ProductHeroLayout';

const backgroundImage =
  'https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3291&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function Slogan(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        选一所适合你的大学
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        去一个你喜欢的城市
      </Typography>
    </ProductHeroLayout>
  );
}

Slogan.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Slogan);
