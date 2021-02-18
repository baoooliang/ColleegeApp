import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1)
  }
}));


export default function Header2() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Colleege
          </Typography>
          <nav>
            <Button size="medium" className={classes.margin} href='/'>
              <SearchIcon />
              找学校
            </Button>
            <Button size="medium" className={classes.margin} href='/match'>
              <CloudDoneIcon />
              智能选校
            </Button>
            <Button size="medium" className={classes.margin}>
              <MailIcon />
              联系我们
            </Button>
          </nav>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}