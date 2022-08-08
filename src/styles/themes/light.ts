import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: red[700],
      dark: red[800],
      light: red[500],
      contrastText: '#fff',
    },
  },
});
