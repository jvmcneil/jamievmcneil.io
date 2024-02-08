import { Link, Stack, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { PositionContainer, Skill } from './Styles.css';

interface PositionProps {
  title: string;
  dates?: string;
  location?: string;
  description: string;
  link?: string;
  linkText?: string;
  skills?: string[];
}

const Position = ({
  title,
  dates,
  location,
  description,
  link,
  linkText,
  skills
}: PositionProps) => (
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
    {link && (
      <Typography variant="body1" component="p">
        <Link href={link} target="_blank" rel="noreferrer nofollow" sx={{ display: 'flex' }}>
          {linkText} <OpenInNewIcon sx={{ ml: 1 }} />
        </Link>
      </Typography>
    )}
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
