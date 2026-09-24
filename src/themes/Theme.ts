import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#CFA86E', // Dourado principal dos botões[cite: 1]
      dark: '#B89258',
      contrastText: '#0D0D0D',
    },
    background: {
      default: '#0D0D0D', // Fundo escuro da página[cite: 1]
      paper: '#141414',   // Cards e modais[cite: 1]
    },
    text: {
      primary: '#FFFFFF',   // Textos principais[cite: 1]
      secondary: '#A1A1A1', // Descrições e subtextos[cite: 1]
    },
    divider: '#262626',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Design reto dos botões da imagem[cite: 1]
          textTransform: 'uppercase',
          fontWeight: 'bold',
        },
      },
    },
  },
});