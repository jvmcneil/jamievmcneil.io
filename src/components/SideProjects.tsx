import { Box, Typography } from '@mui/material';
import { strings } from '../constants/strings';
import Position from './Position';
import { Company, Positions, SectionHeading } from './Styles.css';

const SideProjects = () => (
  <>
    <SectionHeading variant="h4" component="h2" sx={{ mt: 3, mb: 2 }}>
      {strings.SIDE_PROJECTS}
    </SectionHeading>

    <Company>
      <Box>
        <Typography variant="h6" component="h3">
          {strings.LINGUIST}
        </Typography>
        <Typography variant="body1" component="p">
          {strings.LINGUIST_DATES}
        </Typography>
      </Box>
      <Positions>
        <Position
          title={strings.MOBILE_APP}
          description={strings.LINGUIST_DESCRIPTION}
          skills={['React Native', 'TypeScript', 'Expo', 'Zustand', 'Firebase']}
        />
      </Positions>
    </Company>
  </>
);

export default SideProjects;
