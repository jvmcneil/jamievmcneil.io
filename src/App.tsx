import { Avatar, Box, Button, Link, Typography, styled } from '@mui/material';
import { strings } from './constants/strings';
import { MarginLayout } from './components/layout';
import Headshot from './assets/images/headshot.jpg';

const Background = styled('div')`
  position: absolute;
  background-color: #000;
  width: 100%;
  min-height: 100%;
`;

const HeadshotContainer = styled(Avatar)`
  img {
    scale: 2;
    transform-origin: 35px 12px;
  }
`;

const App = () => {
  return (
    <Background>
      <MarginLayout>
        <Typography variant="h3" component="h1">
          {strings.HELLO}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <HeadshotContainer
            alt="Jamie McNeil Headshot"
            src={Headshot}
            sx={{ width: 80, height: 80 }}
          />

          <Typography variant="bodyCode" sx={{ ml: '0.875rem' }}>
            <p>{strings.FRONTEND_SOFTWARE_DEVELOPER}</p>

            <p>{strings.ABOUT}</p>
          </Typography>
        </Box>

        {/* <Button
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

        <Link href="https://github.com/jvmcneil" underline="none" target="_blank" rel="noopener">
          <Typography variant="body1">GitHub</Typography>
        </Link>

        <Link
          href="https://www.instagram.com/radicalnetrunner/"
          underline="none"
          target="_blank"
          rel="noopener">
          <Typography variant="body1">Instagram</Typography>
        </Link> */}
      </MarginLayout>
    </Background>
  );
};

export default App;
