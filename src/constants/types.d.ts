export declare module '@mui/material/styles' {
  interface TypographyVariants {
    bodyCode: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    bodyCode?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
export declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bodyCode: true;
  }
}

export declare module '@mui/material/styles' {
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

export declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    pink: true;
  }
}
