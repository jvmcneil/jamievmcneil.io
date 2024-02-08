import { Typography } from '@mui/material';
import { strings } from '../constants/strings';
import { Company, CompanyTitle, Positions, SectionHeading } from './Styles.css';
import Position from './Position';

const WorkExperience = () => (
  <>
    <SectionHeading variant="h4" component="h2" sx={{ mt: 3, mb: 2 }}>
      {strings.WORK_EXPERIENCE}
    </SectionHeading>

    <Company>
      <div>
        <CompanyTitle>
          <Typography variant="h6" component="h3">
            {strings.HOYLU}
          </Typography>
          <Typography variant="body1" component="p">
            {strings.HOYLU_DATES}
          </Typography>
          <Typography variant="body1" component="p">
            {strings.FULL_TIME}
          </Typography>
        </CompanyTitle>
      </div>
      <Positions>
        <Position
          title={strings.HOYLU_TITLE_LATEST}
          dates={strings.HOYLU_TITLE_LATEST_DATES}
          location={strings.HOYLU_LOCATION_PHILLY}
          description={strings.HOYLU_TITLE_LATEST_DESCRIPTION}
          skills={['React.js', 'TypeScript', 'Redux', 'MongoDB', 'Python', 'Kotlin']}
        />

        <Position
          title={strings.HOYLU_TITLE_THIRD}
          dates={strings.HOYLU_TITLE_THIRD_DATES}
          location={strings.HOYLU_LOCATION_PHILLY}
          description={strings.HOYLU_TITLE_THIRD_DESCRIPTION}
          skills={['React.js', 'TypeScript', 'Redux', 'MongoDB', 'Python', 'Kotlin']}
        />

        <Position
          title={strings.HOYLU_TITLE_SECOND}
          dates={strings.HOYLU_TITLE_SECOND_DATES}
          location={strings.HOYLU_LOCATION_PHILLY}
          description={strings.HOYLU_TITLE_SECOND_DESCRIPTION}
          skills={['React.js', 'Redux', 'Cordova', 'Android Studio', 'Xcode']}
        />

        <Position
          title={strings.HOYLU_TITLE_FIRST}
          dates={strings.HOYLU_TITLE_FIRST_DATES}
          location={strings.HOYLU_LOCATION_ORLANDO}
          description={strings.HOYLU_TITLE_FIRST_DESCRIPTION}
          skills={['PHP', 'MySQL', 'JavaScript', 'WordPress', 'REST API']}
        />
      </Positions>
    </Company>

    <Company>
      <div>
        <CompanyTitle>
          <Typography variant="h6" component="h3">
            {strings.QUADSIMIA}
          </Typography>
          <Typography variant="body1" component="p">
            {strings.QUADSIMIA_DATES}
          </Typography>
          <Typography variant="body1" component="p">
            {strings.FULL_TIME}
          </Typography>
        </CompanyTitle>
      </div>
      <Positions>
        <Position
          title={strings.QUADSIMIA_TITLE}
          location={strings.UTICA}
          description={strings.QUADSIMIA_DESCRIPTION}
          skills={['HTML', 'CSS', 'PHP', 'MySQL', 'WordPress']}
        />
      </Positions>
    </Company>

    <Company>
      <div>
        <CompanyTitle>
          <Typography variant="h6" component="h3">
            {strings.SUNY}
          </Typography>
          <Typography variant="body1" component="p">
            {strings.SUNY_DATES}
          </Typography>
          <Typography variant="body1" component="p">
            {strings.PART_TIME}
          </Typography>
        </CompanyTitle>
      </div>
      <Positions>
        <Position
          title={strings.SUNY_TITLE}
          location={strings.UTICA}
          description={strings.SUNY_DESCRIPTION}
          skills={['HTML', 'CSS', 'PHP', 'WordPress', 'Photoshop']}
        />
      </Positions>
    </Company>

    <Company>
      <div>
        <CompanyTitle>
          <Typography variant="h6" component="h3">
            {strings.GRAPHIC_HIVE}
          </Typography>
          <Typography variant="body1" component="p">
            {strings.GRAPHIC_HIVE_DATES}
          </Typography>
          <Typography variant="body1" component="p">
            {strings.INTERNSHIP}
          </Typography>
        </CompanyTitle>
      </div>
      <Positions>
        <Position
          title={strings.GRAPHIC_HIVE_TITLE}
          location={strings.GRAPHIC_HIVE_LOCATION}
          description={strings.GRAPHIC_HIVE_DESCRIPTION}
          skills={['HTML', 'CSS', 'PHP', 'WordPress']}
        />
      </Positions>
    </Company>
  </>
);

export default WorkExperience;
