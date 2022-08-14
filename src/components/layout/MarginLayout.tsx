import React from 'react';

interface MarginLayoutProps {
    children: React.ReactNode;
}

const MarginLayout = (props: MarginLayoutProps) => {
    return <>{props.children}</>;
}

export default MarginLayout;