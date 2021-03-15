import {
  Avatar,
  Container,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  // canvas / outline for form
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  // icon for form
  avatar: {
    backgroundColor: theme.palette.primary.light,
    margin: theme.spacing(2),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title?: string;
  icon?: JSX.Element;
}

/**
 * Commonly used wrapping components and elements for form inputs
 * @param title Title of form
 * @param icon icon of form
 * @param handleSubmit callback to be executed when form is submitted
 */
const FormOutline: React.FC<Props> = ({
  title,
  icon,
  handleSubmit,
  children,
}) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper} elevation={3}>
        {icon && <Avatar className={classes.avatar}>{icon}</Avatar>}
        {title && <Typography variant="h5">{title}</Typography>}
        <form className={classes.form} onSubmit={handleSubmit} method="post">
          {children}
        </form>
      </Paper>
    </Container>
  );
};

export default FormOutline;
