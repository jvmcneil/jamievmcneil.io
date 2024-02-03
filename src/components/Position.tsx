import { Chip, Stack, Typography } from '@mui/material';
import { PositionContainer } from './Styles.css';

interface PositionProps {
  title: string;
  dates?: string;
  location: string;
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
      <Stack direction="row" spacing={1}>
        {skills.map((skill) => (
          <Chip label={skill} color="primary" size="small" />
        ))}
      </Stack>
    )}
  </PositionContainer>
);

export default Position;
