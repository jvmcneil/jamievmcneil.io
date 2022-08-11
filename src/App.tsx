import React from 'react';
import { Typography } from '@mui/material';
import { strings } from './constants/strings';
import { MarginLayout } from './components/layout';

const App = () => {
  return (
    <MarginLayout>
      <Typography variant='h1'>{strings.HEY}</Typography>
      <Typography variant='body1'>{strings.FRONTEND_SOFTWARE_DEVELOPER}</Typography>
    </MarginLayout>
  );
}

export default App;
