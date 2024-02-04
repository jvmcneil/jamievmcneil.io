import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  const today = new Date();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        my: '1.3125rem'
      }}>
      <Typography variant="body1" component="p">
        <p>
          Copyright © {today.getFullYear()}{' '}
          <Link href="https://github.com/mcneiljv" target="_blank" rel="noreferrer nofollow">
            Jamie McNeil
          </Link>
          . All rights reserved.
        </p>
      </Typography>
    </Box>
  );
};

export default Footer;
