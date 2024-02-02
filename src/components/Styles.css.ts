import { Avatar, Box, Typography, TypographyProps, styled } from '@mui/material';

export const Background = styled('div')`
  position: absolute;
  background-color: #000;
  width: 100%;
  min-height: 100%;
`;

export const HeadshotContainer = styled(Avatar)`
  img {
    scale: 2;
    transform-origin: 35px 12px;
  }
`;

export const Company = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SectionHeading = styled(Typography)<TypographyProps>`
  margin: 3rem 0 2rem;
`;

export const Positions = styled('div')`
  max-width: 25rem;
`;
export const Position = styled('div')`
  margin-bottom: 1.25rem;
`;
