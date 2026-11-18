import { Box, Button, Container, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function App() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          textAlign: 'center',
        }}
      >
        <MenuBookIcon
          color="primary"
          sx={{ fontSize: 80 }}
        />

        <Typography variant="h3" color="primary">
          Biblioteca Digital
        </Typography>

        <Typography color="text.secondary">
          Projeto de Front-End Avançado - UNIESP
        </Typography>

        <Typography color="text.secondary">
          Ambiente e tema configurados com sucesso!
        </Typography>

        <Button variant="contained" color="primary">
          Material UI funcionando
        </Button>

        <Button variant="contained" color="secondary">
          Tema personalizado
        </Button>
      </Box>
    </Container>
  );
}

export default App;
