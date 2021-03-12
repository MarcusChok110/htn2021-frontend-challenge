import {
  AppBar,
  Button,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

// To get rid of Link's default styles on the title
const useStyles = makeStyles({
  title: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const Header: React.FC = () => {
  const [isLoggedIn] = useContext(UserContext);
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="space-between">
          <Typography
            className={classes.title}
            variant="h6"
            component={Link}
            to="/"
          >
            Hackathon Global Inc
          </Typography>
          {isLoggedIn ? (
            <Button color="inherit">Logout</Button>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

export {};
