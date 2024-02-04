import { Box, ThemeProvider, Typography } from '@mui/material';
import Headshot from './assets/images/headshot.jpg';
import { strings } from './constants/strings';
import { theme } from './constants/theme';
import { MarginLayout } from './components/layout';
import { Background, HeadshotContainer } from './components/Styles.css';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Footer from './components/Footer';
import SideProjects from './components/SideProjects';

const App = () => (
  <ThemeProvider theme={theme}>
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

          <Typography sx={{ ml: '0.875rem' }}>
            <p>{strings.FRONTEND_SOFTWARE_DEVELOPER}</p>

            <p>{strings.ABOUT}</p>
          </Typography>
        </Box>

        <WorkExperience />

        <Education />

        <SideProjects />

        <Footer />
      </MarginLayout>
    </Background>
  </ThemeProvider>
);

export default App;
