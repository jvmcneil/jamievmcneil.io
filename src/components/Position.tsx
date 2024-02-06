import { Stack, Typography } from '@mui/material';
import { PositionContainer, Skill } from './Styles.css';

interface PositionProps {
  title: string;
  dates?: string;
  location?: string;
  description: string;
  skills?: string[];
}

const Position = ({ title, dates, location, description, skills }: PositionProps) => (
  <PositionContainer>
    <Typography variant="h6" component="h3">
      {title}
    </Typography>
    <Typography variant="subtitle2" component="p">
      {dates}
    </Typography>
    <Typography variant="subtitle2" component="p">
      {location}
    </Typography>
    <Typography variant="body1" component="p">
      {description}
    </Typography>
    {skills && (
      <Stack direction="row" spacing={1} flexWrap={{ xs: 'wrap', sm: 'nowrap' }} sx={{ mt: 1 }}>
        {skills.map((skill) => (
          <Skill label={skill} color="primary" size="small" key={skill} />
        ))}
      </Stack>
    )}
  </PositionContainer>
);

export default Position;
