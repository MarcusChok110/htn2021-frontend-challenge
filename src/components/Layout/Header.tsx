import {
  AppBar,
  Button,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { userActions } from '../../utils/reducers/userReducer';
import useSnackbar from '../Form/useSnackBar';

// To get rid of Link's default styles on the title
const useStyles = makeStyles({
  title: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

/**
 * AppBar
 */
const Header: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isLoggedIn, dispatch] = useContext(UserContext);
  const [openSnackbar, snackbarProps, LogoutSnackbar] = useSnackbar(
    'Logged out successfully'
  );
  const handleLogout = () => {
    dispatch(userActions.LOGOUT);
    openSnackbar();
    history.push('/');
  };

  return (
    <>
      <AppBar position="sticky">
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
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <LogoutSnackbar {...snackbarProps} />
    </>
  );
};

export default Header;

export {};
