import { createContext, ReactNode, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

export const ThemeWrapperContext = createContext({
  toggleColorMode: () => {}
});

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const [lightMode, setLightMode] = useState<boolean>(false);

  const lightTheme = createTheme({
    palette: {
      background: {
        default: '#fff'
      }
    },
    components: {
      MuiChip: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: '#eceef0',
            color: '#000'
          }
        }
      }
    }
  });

  const darkTheme = createTheme({
    palette: {
      background: {
        default: '#000'
      },
      text: {
        primary: '#fff'
      }
    },
    components: {
      MuiChip: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: '#26292B',
            color: '#fff'
          }
        }
      }
    }
  });

  const themeWrapperUtils = useMemo(
    () => ({
      toggleColorMode: () => {
        setLightMode((prev) => !prev);
      }
    }),
    []
  );

  return (
    <ThemeWrapperContext.Provider value={themeWrapperUtils}>
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>{children}</ThemeProvider>
    </ThemeWrapperContext.Provider>
  );
}
