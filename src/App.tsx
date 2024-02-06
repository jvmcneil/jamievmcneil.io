import { useContext } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
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
  const theme = useTheme();
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
            <ThemeSwitch
              onClick={() => themeContext.toggleColorMode()}
              checked={theme?.palette?.mode === 'dark'}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2 }}>
            <HeadshotContainer
              alt="Jamie McNeil Headshot"
              src={Headshot}
              sx={{ width: 80, height: 80 }}
            />

            <Box sx={{ ml: '0.875rem' }}>
              <Typography sx={{ mb: 2 }}>{strings.FRONTEND_SOFTWARE_DEVELOPER}</Typography>

              <Typography>{strings.ABOUT}</Typography>
            </Box>
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
