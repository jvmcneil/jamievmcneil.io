import { Box, Typography } from '@mui/material';
import { strings } from '../constants/strings';
import { Company, PositionContainer, Positions, SectionHeading } from './Styles.css';
import Position from './Position';

const Education = () => (
  <>
    <SectionHeading variant="h4" component="h2" sx={{ mt: 3, mb: 2 }}>
      {strings.EDUCATION}
    </SectionHeading>

    <Company>
      <Box>
        <Typography variant="h6" component="h3">
          {strings.SUNY}
        </Typography>
        <Typography variant="body1" component="p">
          {strings.SUNY_EDU_DATES}
        </Typography>
      </Box>
      <Positions>
        <Position
          title={strings.BS}
          location={strings.CID}
          description={strings.SUNY_EDU_DESCRIPTION}
        />
      </Positions>
    </Company>
  </>
);

export default Education;
