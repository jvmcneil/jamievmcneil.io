import React from 'react';
import { Box } from '@mui/material';

interface MarginLayoutProps {
    children: React.ReactNode;
}

const MarginLayout = (props: MarginLayoutProps) => {
    return <Box sx={{ m: '2rem auto', maxWidth: 660, width: '100%' }}>{props.children}</Box>;
}

export default MarginLayout;