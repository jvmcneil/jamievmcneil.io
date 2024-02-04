import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import Headshot from './assets/images/headshot.jpg';
import { strings } from './constants/strings';
import { MarginLayout } from './components/layout';
import { ThemeWrapperContext } from './components/ThemeWrapper';
import { Background, HeadshotContainer, ThemeSwitch } from './components/Styles.css';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Footer from './components/Footer';
import SideProjects from './components/SideProjects';

const App = () => {
  const themeContext = useContext(ThemeWrapperContext);

  return (
    <Box>
      <Background sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        <MarginLayout>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <Typography variant="h3" component="h1">
              {strings.HELLO}
            </Typography>
            <ThemeSwitch onClick={themeContext.toggleColorMode} />
          </Box>

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
    </Box>
  );
};

export default App;
