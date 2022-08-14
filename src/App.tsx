import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import { strings } from './constants/strings';
import { MarginLayout } from './components/layout';
import Headshot from './assets/images/headshot.jpg';

const Row = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 2rem;
`;

const Column = styled('div')`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
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

      <Row>
        <Column>
          <Typography variant='h1'>{strings.HEY}</Typography>
          <Typography variant='body1'>{strings.FRONTEND_SOFTWARE_DEVELOPER}</Typography>
        </Column>

        <Column>
          <Button variant="outlined">{strings.GET_IN_TOUCH}</Button>
        </Column>
      </Row>

      <Typography variant='body1'>{strings.ABOUT}</Typography>

    </MarginLayout>
  );
}

export default App;
