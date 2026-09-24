import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// Fonte condensada em negrito
const HEADER_FONT = '"Oswald", "Bebas Neue", "Impact", sans-serif';

export const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#0D0D0D',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(180deg, rgba(13, 13, 13, 0.3) 0%, rgba(13, 13, 13, 0.75) 55%, #0D0D0D 100%), url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        backgroundRepeat: 'no-repeat',
        pb: { xs: 4, sm: 6 },
        pt: { xs: 12, sm: 16 },
      }}
    >
      <Container maxWidth="xs" sx={{ px: { xs: 3, sm: 4 } }}>
        <Stack>
          <Typography
            variant="caption"
            sx={{
              color: '#CFA86E',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              fontSize: '0.75rem',
            }}
          >
            BARBEARIA URBANA — Rio de Janeiro
          </Typography>

          {/* Título Principal */}
          <Box>

            <Typography
              variant="h1"
              sx={{
                fontFamily: HEADER_FONT,
                fontSize: { xs: '3.2rem', sm: '4rem' },
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
              }}
            >
              O CORTE
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: HEADER_FONT,
                fontSize: { xs: '3.2rem', sm: '4rem' },
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: '#CFA86E',
              }}
            >
              PERFEITO.
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: HEADER_FONT,
                fontSize: { xs: '3.2rem', sm: '4rem' },
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
              }}
            >
              TODA VEZ.
            </Typography>
          </Box>

          {/* Subtítulo / Descrição */}
          <Typography
            variant="body2"
            sx={{
              color: '#A1A1A1',
              fontSize: '0.925rem',
              lineHeight: 1.6,
              maxWidth: '360px',
              pt: 0.5,
            }}
          >
            Precisão, estilo e respeito pelo seu tempo. Na Bladehaus, cada corte é executado com técnica afiada.
          </Typography>
        </Stack>

        {/* Botões de Ação */}
        <Stack spacing={1.5}>
          {/* Botão Primário - Dourado */}
          <Button
            fullWidth
            variant="contained"
            endIcon={<ChevronRightIcon />}
            sx={{
              backgroundColor: '#CFA86E',
              color: '#0D0D0D',
              fontWeight: 800,
              fontSize: '0.875rem',
              letterSpacing: '0.08em',
              borderRadius: 0,
              py: 1.75,
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#B89258',
                boxShadow: 'none',
              },
            }}
          >
            AGENDAR AGORA
          </Button>

          {/* Botão Secundário - Dark / Outlined */}
          <Button
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: 'rgba(10, 10, 10, 0.85)',
              color: '#FFFFFF',
              borderColor: '#262626',
              fontWeight: 800,
              fontSize: '0.875rem',
              letterSpacing: '0.08em',
              borderRadius: 0,
              py: 1.75,
              '&:hover': {
                backgroundColor: '#1A1A1A',
                borderColor: '#333333',
              },
            }}
          >
            VER SERVIÇOS
          </Button>
        </Stack>

        {/* Badge de Horário de Funcionamento */}
        <Stack>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.2,
              backgroundColor: 'rgba(20, 20, 20, 0.75)',
              backdropFilter: 'blur(4px)',
              border: '1px solid #262626',
              px: 2,
              py: 1.2,
              width: 'fit-content',
            }}
          >
            <AccessTimeIcon sx={{ color: '#CFA86E', fontSize: '1.1rem' }} />
            <Typography
              variant="caption"
              sx={{
                color: '#8E8E8E',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
              }}
            >
              SEG - SÁB: 09H ÀS 20H
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box >


  );
};