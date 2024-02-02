import { Box, Button, Link, Typography, styled } from '@mui/material';
import { strings } from './constants/strings';
import { MarginLayout } from './components/layout';
import Headshot from './assets/images/headshot.jpg';

const Background = styled('div')`
  position: absolute;
  background-color: #000;
  width: 100%;
  min-height: 100%;
`;

const Row = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%',
  marginBottom: '2rem',

  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}));

const Column = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  flex: '1',
  paddingRight: '2rem',

  [theme.breakpoints.down('md')]: {
    paddingRight: '0',
    marginBottom: '2rem'
  }
}));

const App = () => {
  return (
    <Background>
      <MarginLayout>
        <Box
          component="img"
          sx={{
            width: 350
          }}
          alt="Jamie McNeil Headshot"
          src={Headshot}
        />

            <Typography variant="h3" component="h1">{strings.HELLO}</Typography>
            <Typography variant="bodyCode">{strings.FRONTEND_SOFTWARE_DEVELOPER}</Typography>

            <Button
              component={Link}
              href="mailto:jamievmcneil@gmail.com?subject=Jamie%20McNeil%20Website%20Enquiry"
              underline="none"
              target="_blank"
              variant="contained"
              color="pink"
              sx={{ width: 'fit-content' }}>
              {strings.GET_IN_TOUCH}
            </Button>

            <Typography variant="bodyCode">{strings.ABOUT}</Typography>

            <Typography variant="bodyCode">{strings.EXPERIENCE}</Typography>



            <Link
              href="https://www.linkedin.com/in/jamiemcneil/"
              underline="none"
              target="_blank"
              rel="noopener">
              <Typography variant="body1">LinkedIn</Typography>
            </Link>

            <Link
              href="https://github.com/jvmcneil"
              underline="none"
              target="_blank"
              rel="noopener">
              <Typography variant="body1">GitHub</Typography>
            </Link>


            <Link
              href="https://www.instagram.com/radicalnetrunner/"
              underline="none"
              target="_blank"
              rel="noopener">
              <Typography variant="body1">Instagram</Typography>
            </Link>
      </MarginLayout>
    </Background>
  );
};

export default App;
