import { Avatar, Box, Typography, TypographyProps, styled } from '@mui/material';
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

const Company = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SectionHeading = styled(Typography)<TypographyProps>`
  margin: 3rem 0 2rem;
`;

const Positions = styled('div')`
  max-width: 25rem;
`;
const Position = styled('div')`
  margin-bottom: 1.25rem;
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

        <SectionHeading variant="h4" component="h2" sx={{ mt: 3, mb: 2 }}>
          {strings.WORK_EXPERIENCE}
        </SectionHeading>

        <Company>
          <Box>
            <Typography variant="h6" component="h3">
              {strings.HOYLU}
            </Typography>
            <Typography variant="body1" component="p">
              {strings.HOYLU_DATE}
            </Typography>
            <Typography variant="body1" component="p">
              {strings.FULL_TIME}
            </Typography>
          </Box>
          <Positions>
            <Position>
              <Typography variant="h6" component="h3">
                {strings.HOYLU_TITLE_LATEST}
              </Typography>
              <Typography variant="subtitle2" component="p">
                {strings.HOYLU_TITLE_LATEST_DATES}
              </Typography>
              <Typography variant="subtitle2" component="p">
                {strings.HOYLU_LOCATION_PHILLY}
              </Typography>
              <Typography variant="body1" component="p">
                {strings.HOYLU_TITLE_LATEST_DESCRIPTION}
              </Typography>
            </Position>

            <Position>
              <Typography variant="h6" component="h3">
                {strings.HOYLU_TITLE_THIRD}
              </Typography>
              <Typography variant="subtitle2" component="p">
                {strings.HOYLU_TITLE_THIRD_DATES}
              </Typography>
              <Typography variant="subtitle2" component="p">
                {strings.HOYLU_LOCATION_PHILLY}
              </Typography>
              <Typography variant="body1" component="p">
                {strings.HOYLU_TITLE_THIRD_DESCRIPTION}
              </Typography>
            </Position>

            <Position>
              <Typography variant="h6" component="h3">
                {strings.HOYLU_TITLE_SECOND}
              </Typography>
              <Typography variant="subtitle2" component="p">
                {strings.HOYLU_TITLE_SECOND_DATES}
              </Typography>
              <Typography variant="subtitle2" component="p">
                {strings.HOYLU_LOCATION_PHILLY}
              </Typography>
              <Typography variant="body1" component="p">
                {strings.HOYLU_TITLE_SECOND_DESCRIPTION}
              </Typography>
            </Position>

            <Position>
              <Typography variant="h6" component="h3">
                {strings.HOYLU_TITLE_FIRST}
              </Typography>
              <Typography variant="subtitle2" component="p">
                {strings.HOYLU_TITLE_FIRST_DATES}
              </Typography>
              <Typography variant="subtitle2" component="p">
                {strings.HOYLU_LOCATION_ORLANDO}
              </Typography>
              <Typography variant="body1" component="p">
                {strings.HOYLU_TITLE_FIRST_DESCRIPTION}
              </Typography>
            </Position>
          </Positions>
        </Company>
      </MarginLayout>
    </Background>
  );
};

export default App;
