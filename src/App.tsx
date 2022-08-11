import React from 'react';
import { Typography } from '@mui/material';
import { strings } from './constants/strings';

function App() {
  return (
    <>
      <Typography variant='h1'>{strings.HEY}</Typography>
      <Typography variant='body1'>{strings.FRONTEND_SOFTWARE_DEVELOPER}</Typography>
    </>
  );
}

export default App;
