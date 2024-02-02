import { Box, Typography } from '@mui/material';
import { strings } from '../constants/strings';
import { Company, Position, Positions, SectionHeading } from './Styles.css';

const WorkExperience = () => (
  <>
    <SectionHeading variant="h4" component="h2" sx={{ mt: 3, mb: 2 }}>
      {strings.WORK_EXPERIENCE}
    </SectionHeading>

    <Company>
      <Box>
        <Typography variant="h6" component="h3">
          {strings.HOYLU}
        </Typography>
        <Typography variant="body1" component="p">
          {strings.HOYLU_DATES}
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

    <Company>
      <Box>
        <Typography variant="h6" component="h3">
          {strings.QUADSIMIA}
        </Typography>
        <Typography variant="body1" component="p">
          {strings.QUADSIMIA_DATES}
        </Typography>
        <Typography variant="body1" component="p">
          {strings.FULL_TIME}
        </Typography>
      </Box>
      <Positions>
        <Position>
          <Typography variant="h6" component="h3">
            {strings.QUADSIMIA_TITLE}
          </Typography>
          <Typography variant="subtitle2" component="p">
            {strings.UTICA}
          </Typography>
          <Typography variant="body1" component="p">
            {strings.QUADSIMIA_DESCRIPTION}
          </Typography>
        </Position>
      </Positions>
    </Company>

    <Company>
      <Box>
        <Typography variant="h6" component="h3">
          {strings.SUNY}
        </Typography>
        <Typography variant="body1" component="p">
          {strings.SUNY_DATES}
        </Typography>
        <Typography variant="body1" component="p">
          {strings.PART_TIME}
        </Typography>
      </Box>
      <Positions>
        <Position>
          <Typography variant="h6" component="h3">
            {strings.SUNY_TITLE}
          </Typography>
          <Typography variant="subtitle2" component="p">
            {strings.UTICA}
          </Typography>
          <Typography variant="body1" component="p">
            {strings.SUNY_DESCRIPTION}
          </Typography>
        </Position>
      </Positions>
    </Company>

    <Company>
      <Box>
        <Typography variant="h6" component="h3">
          {strings.GRAPHIC_HIVE}
        </Typography>
        <Typography variant="body1" component="p">
          {strings.GRAPHIC_HIVE_DATES}
        </Typography>
        <Typography variant="body1" component="p">
          {strings.INTERNSHIP}
        </Typography>
      </Box>
      <Positions>
        <Position>
          <Typography variant="h6" component="h3">
            {strings.GRAPHIC_HIVE_TITLE}
          </Typography>
          <Typography variant="subtitle2" component="p">
            {strings.GRAPHIC_HIVE_LOCATION}
          </Typography>
          <Typography variant="body1" component="p">
            {strings.GRAPHIC_HIVE_DESCRIPTION}
          </Typography>
        </Position>
      </Positions>
    </Company>
  </>
);

export default WorkExperience;
