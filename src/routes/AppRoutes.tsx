
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';

import { Details } from '../pages/details/Details';

function Home() {
  return (
    <Box>
      <Typography variant="h3" color="primary" gutterBottom>
        Biblioteca Digital
      </Typography>

      <Typography variant="body1" gutterBottom>
        Página inicial da aplicação.
      </Typography>

      <Button
        component={Link}
        to="/livro/zyTCA1FPjgYC"
        variant="contained"
        sx={{ mt: 2 }}
      >
        Testar detalhes de um livro
      </Button>
    </Box>
  );
}

function DetailsPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <Box>
      <Details key={id} idLivro={id} />

      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{ mt: 3 }}
      >
        Voltar ao início
      </Button>
    </Box>
  );
}

function About() {
  return (
    <Box>
      <Typography variant="h4" color="primary" gutterBottom>
        Sobre o projeto
      </Typography>

      <Typography>
        Aplicação desenvolvida para a disciplina de
        Tecnologia para Front-End Avançado da UNIESP.
      </Typography>
    </Box>
  );
}

function NotFound() {
  return (
    <Box>
      <Typography variant="h3" color="primary">
        Erro 404
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Página não encontrada.
      </Typography>

      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{ mt: 3 }}
      >
        Voltar ao início
      </Button>
    </Box>
  );
}

export default function AppRoutes() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livro/:id" element={<DetailsPage />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}
