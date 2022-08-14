import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import { strings } from './constants/strings';
import { MarginLayout } from './components/layout';
import Headshot from './assets/images/headshot.jpg';

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
      <Box
        component="img"
        sx={{
          width: 350,
          // height: 233,
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="Jamie McNeil Headshot"
        src={Headshot}
      />

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
