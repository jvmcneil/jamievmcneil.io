import React from 'react';
import { Button, Typography, styled } from '@mui/material';
import { strings } from './constants/strings';
import { MarginLayout } from './components/layout';

const Content = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;

  >* {
    width: 45%;
  }
`;

const App = () => {
  return (
    <MarginLayout>
      <Typography variant='h1'>{strings.HEY}</Typography>
      <Typography variant='body1'>{strings.FRONTEND_SOFTWARE_DEVELOPER}</Typography>
      <Button variant="outlined">{strings.GET_IN_TOUCH}</Button>

      <Content>
        <Typography variant='body1'>{strings.ABOUT}</Typography>
      </Content>

    </MarginLayout>
  );
}

export default App;
