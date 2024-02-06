import { createContext, ReactNode, useMemo, useState } from 'react';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';

export const ThemeWrapperContext = createContext({
  toggleColorMode: () => {}
});

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState<PaletteMode>('dark');

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
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
      mode: 'dark',
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
        const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
        setThemeMode(newThemeMode);
      }
    }),
    [themeMode]
  );

  return (
    <ThemeWrapperContext.Provider value={themeWrapperUtils}>
      <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeWrapperContext.Provider>
  );
}
