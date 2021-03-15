import React, { useContext, useEffect } from 'react';
import FormOutline from '../../components/Form/FormOutline';
import UserContext from '../../contexts/UserContext';
import { userActions } from '../../utils/reducers/userReducer';
import { LockOpen } from '@material-ui/icons';
import useTextField from '../../components/Form/useTextField';
import { useHistory } from 'react-router-dom';
import isCorrectLogin from '../../utils/helpers/isCorrectLogin';
import useSnackbar from '../../components/Form/useSnackBar';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2, 0),
  },
}));

const Login: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isLoggedIn, dispatch] = useContext(UserContext);

  // credential text fields
  const [user, userProps, UserInput] = useTextField('Username');
  const [pass, passProps, PassInput] = useTextField('Password');

  // snackbar when username/password don't match
  const [openErrorSnackbar, errorSnackbarProps, ErrorSnackbar] = useSnackbar(
    'Incorrect username or password'
  );

  // if user is already logged in, redirect to home page
  useEffect(() => {
    if (isLoggedIn) history.push('/');
  }, [history, isLoggedIn]);

  // when submit button or ENTER is clicked
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCorrectLogin(user, pass)) dispatch(userActions.LOGIN);
    else openErrorSnackbar();
  };

  return (
    <>
      <FormOutline
        title={'Login'}
        icon={<LockOpen />}
        handleSubmit={handleSubmit}
      >
        <UserInput {...userProps} />
        <PassInput {...passProps} type={'password'} />
        <Button
          className={classes.button}
          fullWidth
          type={'submit'}
          variant={'contained'}
          color={'primary'}
        >
          Submit
        </Button>
      </FormOutline>
      <ErrorSnackbar {...errorSnackbarProps} />
    </>
  );
};

export default Login;
