import { createTheme } from '@mui/material';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });

export const theme = createTheme({
    typography: {
        allVariants: {
            color: "white"
        },
        bodyCode: {
            // fontFamily: 'Fira Code',
            color: "white"
        }
    },
    palette: {
        pink: createColor("#F20587"),
    },
});