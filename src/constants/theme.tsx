import { createTheme } from '@mui/material';

// const { palette } = createTheme();
// const { augmentColor } = palette;
// const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });

export const theme = createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#26292B'
        }
      }
    }
  },
  typography: {
    allVariants: {
      color: 'white'
    }
  }
});
