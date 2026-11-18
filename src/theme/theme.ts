import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E3A5F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C49A6C',
      contrastText: '#17202A',
    },
    background: {
      default: '#F5F3EF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2937',
      secondary: '#64748B',
    },
  },

  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 20px',
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
