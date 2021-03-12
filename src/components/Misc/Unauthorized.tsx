import { Typography } from '@material-ui/core';
import React from 'react';

const Unauthorized: React.FC = () => {
  return (
    <>
      <Typography variant="h2">Unauthorized</Typography>
      <Typography variant="body1" color="error">
        You must be logged in to view this page.
      </Typography>
    </>
  );
};

export default Unauthorized;
