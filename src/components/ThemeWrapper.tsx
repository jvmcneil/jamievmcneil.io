import { createContext, ReactNode, useMemo, useState } from 'react';
import { ThemeProvider, PaletteMode, createTheme } from '@mui/material';

export const ThemeWrapperContext = createContext({
  toggleColorMode: () => {}
});

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        },
        components: {
          MuiChip: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: mode === 'light' ? '#000' : '#26292B',
                color: '#fff'
              }
            }
          }
        }
      }),
    [mode]
  );

  const themeWrapperUtils = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  return (
    <ThemeWrapperContext.Provider value={themeWrapperUtils}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeWrapperContext.Provider>
  );
}
