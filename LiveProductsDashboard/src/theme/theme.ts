import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {

  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    logo: React.CSSProperties;
    footer: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    logo?: React.CSSProperties;
    footer?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    logo: true;
    footer: true;
  }
}

declare module "@mui/material" {
  interface Color {
    main: string;
  }
}

const colors = {
  white: '#fff',
  black: '#000'
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    logo: {
      color: colors.white,
      fontSize: "24px",
      fontWeight: 600,
    },
    footer: {
      color: colors.black,
      fontSize: "16px",
      fontWeight: 400,
    },
  },
})

export default theme
