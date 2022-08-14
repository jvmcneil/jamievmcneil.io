import React from 'react';
import { Box, Button, Link, Typography, styled } from '@mui/material';
import { strings } from './constants/strings';
import { MarginLayout } from './components/layout';
import Headshot from './assets/images/headshot.jpg';

const Background = styled('div')`
    position: absolute;
    background-color: #F20587;
    background-image: linear-gradient(30deg, #033E8C, #F20587);
    min-height: 100%;
`;

const Row = styled('div')`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 2rem;
    `;

const Column = styled('div')`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`;

const App = () => {
  return (
    <Background>
      <MarginLayout>
        <Box
          component="img"
          sx={{
            width: 350,
            // boxShadow: '-50px -50px 0 -40px red, 50px 50px 0 -40px red'
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
            <Typography variant='bodyCode'>{strings.FRONTEND_SOFTWARE_DEVELOPER}</Typography>
          </Column>

          <Column>
            <Button component={Link} href='mailto:jamievmcneil@gmail.com?subject=Jamie%20McNeil%20Website%20Enquiry' underline="none" target="_blank" variant="contained" color='pink' sx={{ width: 'fit-content' }}>{strings.GET_IN_TOUCH}</Button>
          </Column>
        </Row>

        <Row>
          <Column>
            <Typography variant='bodyCode'>{strings.ABOUT}</Typography>
          </Column>

          <Column>
            <Typography variant='bodyCode'>{strings.EXPERIENCE}</Typography>
          </Column>
        </Row>

        <Row>
          <Column>
            <Link href='https://www.linkedin.com/in/jamiemcneil/' underline="none" target="_blank" rel="noopener"><Typography variant='body1'>LinkedIn</Typography></Link>
          </Column>

          <Column>
            <Link href='https://github.com/jvmcneil' underline="none" target="_blank" rel="noopener"><Typography variant='body1'>GitHub</Typography></Link>
          </Column>

          <Column>
            <Link href='https://www.instagram.com/radicalnetrunner/' underline="none" target="_blank" rel="noopener"><Typography variant='body1'>Instagram</Typography></Link>
          </Column>
        </Row>

      </MarginLayout>
    </Background>
  );
}

export default App;
