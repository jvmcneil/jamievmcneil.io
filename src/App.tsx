import { useContext, useState } from 'react';
import { Box, Button, GlobalStyles, Typography, useTheme } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';
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
import SocialModal from './components/SocialModal';

const App = () => {
  const theme = useTheme();
  const themeContext = useContext(ThemeWrapperContext);
  const backgroundColor = theme?.palette?.background?.default;

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalToggle = (prev: boolean) => setModalOpen(!prev);

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
              WebkitTextFillColor: 'transparent',
              textShadow: `${
                theme.palette.mode === 'dark'
                  ? '0px 0px 5px rgba(255,255,255,0.5)'
                  : '0px 0px 5px rgba(106,102,217,0.5)'
              }`
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

            <Typography sx={{ mb: 2 }}>{strings.ABOUT}</Typography>

            <Button onClick={() => handleModalToggle(modalOpen)} variant='contained' size='small' endIcon={<WavingHandIcon />}>{strings.GET_IN_TOUCH}</Button>
          </Box>
        </HeadshotIntroContainer>

        <WorkExperience />

        <Education />

        <SideProjects />

        <Footer />

        <SocialModal modalOpen={modalOpen} handleModalToggle={handleModalToggle} />
      </MarginLayout>
    </Box>
  );
};

export default App;
