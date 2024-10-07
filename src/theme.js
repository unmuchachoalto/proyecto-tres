// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // Color principal
    },
    secondary: {
      main: '#ff4081',  // Color secundario
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
    },
    background: {
        default: '#5d88f5', // Color de fondo de la aplicación
        paper: '#5df562',  // Color de fondo de componentes como Paper
      },
  },
});

export default theme;
