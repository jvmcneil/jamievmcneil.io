// @ts-nocheck TODO: Fix type errors
import { createTheme } from '@mui/material';

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        bodyCode: true;
    }
}

export const theme = createTheme({
    typography: {
        bodyCode: {
            color: 'red'
        }
    }
});