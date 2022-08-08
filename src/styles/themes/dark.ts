import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

export const themeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[700],
      dark: blue[800],
      light: blue[500],
      contrastText: '#fff',
    },
  },
});
