import { Link, Typography } from '@mui/material';
import { FooterContainer } from './Styles.css';

const Footer = () => {
  const today = new Date();
  return (
    <FooterContainer>
      <Typography variant="body1" component="p">
        Copyright © {today.getFullYear()}{' '}
        <Link
          href="https://github.com/mcneiljv"
          target="_blank"
          rel="noreferrer nofollow"
          sx={{ color: '#F07EF2', textDecorationColor: '#F07EF2' }}>
          Jamie McNeil
        </Link>
        . All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
