import { Box, Typography } from '@mui/material';
import { strings } from '../constants/strings';
import { Company, Position, Positions, SectionHeading } from './Styles.css';

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
        <Position>
          <Typography variant="h6" component="h3">
            {strings.BS}
          </Typography>
          <Typography variant="subtitle2" component="p">
            {strings.CID}
          </Typography>
          <Typography variant="body1" component="p">
            {strings.SUNY_EDU_DESCRIPTION}
          </Typography>
        </Position>
      </Positions>
    </Company>
  </>
);

export default Education;
