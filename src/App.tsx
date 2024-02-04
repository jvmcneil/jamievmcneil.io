import { Box, IconButton, Typography, useTheme } from '@mui/material';
import Headshot from './assets/images/headshot.jpg';
import { strings } from './constants/strings';
import { MarginLayout } from './components/layout';
import ThemeWrapper, { ThemeWrapperContext } from './components/ThemeWrapper';
import { Background, HeadshotContainer, ThemeSwitch } from './components/Styles.css';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Footer from './components/Footer';
import SideProjects from './components/SideProjects';
import { useContext } from 'react';

const App = () => {
  const theme = useTheme();
  const themeContext = useContext(ThemeWrapperContext);

  return (
    <Box>
      {/* <ThemeSwitch sx={{ m: 1 }} onChange={themeContext.toggleColorMode} />
       */}
      <Background sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        <MarginLayout>
          <IconButton
            sx={{ fontSize: '1rem' }}
            onClick={themeContext.toggleColorMode}
            color="inherit"
            disableTouchRipple
            disableRipple>
            {theme.palette.mode === 'dark' ? (
              <span role="img" aria-label="sun">
                Go Light ☀️
              </span>
            ) : (
              <span role="img" aria-label="moon">
                Go Dark 🌚
              </span>
            )}
          </IconButton>
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
    </Box>
  );
};

export default App;
