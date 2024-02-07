import { useContext } from 'react';
import { Box, GlobalStyles, Typography, useTheme } from '@mui/material';
import Headshot from './assets/images/headshot.jpg';
import { strings } from './constants/strings';
import { MarginLayout } from './components/layout';
import { ThemeWrapperContext } from './components/ThemeWrapper';
import {
  HeadshotContainer,
  HeadshotIntroContainer,
  NameContainer,
  ThemeSwitch
} from './components/Styles.css';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Footer from './components/Footer';
import SideProjects from './components/SideProjects';

const App = () => {
  const theme = useTheme();
  const themeContext = useContext(ThemeWrapperContext);
  const backgroundColor = theme?.palette?.background?.default;

  return (
    <Box sx={{ color: 'text.primary' }}>
      <GlobalStyles styles={{ body: { backgroundColor } }} />
      <MarginLayout>
        <NameContainer>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              backgroundImage: 'linear-gradient(45deg, #1D64F2 10%, #F07EF2 60%)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
            {strings.HELLO}
          </Typography>
          <ThemeSwitch
            onClick={() => themeContext.toggleColorMode()}
            checked={theme?.palette?.mode === 'dark'}
          />
        </NameContainer>

        <HeadshotIntroContainer>
          <HeadshotContainer
            alt="Jamie McNeil Headshot"
            src={Headshot}
            sx={{ width: 80, height: 80 }}
          />

          <Box sx={{ my: 2 }}>
            <Typography sx={{ mb: 2 }}>{strings.FRONTEND_SOFTWARE_DEVELOPER}</Typography>

            <Typography>{strings.ABOUT}</Typography>
          </Box>
        </HeadshotIntroContainer>

        <WorkExperience />

        <Education />

        <SideProjects />

        <Footer />
      </MarginLayout>
    </Box>
  );
};

export default App;
