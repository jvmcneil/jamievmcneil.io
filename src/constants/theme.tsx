import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        bodyCode: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        bodyCode?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        bodyCode: true;
    }
}


export const theme = createTheme({
    typography: {
        bodyCode: {
            fontFamily: 'Fira Code'
        }
    }
});