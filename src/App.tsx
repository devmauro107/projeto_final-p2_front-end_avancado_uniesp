
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar sx={{ flexWrap: 'wrap', gap: 1, py: 1 }}>
          <MenuBookIcon sx={{ mr: 1 }} />

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Biblioteca Digital
          </Typography>

          <Button color="inherit" component={Link} to="/">
            Início
          </Button>

          <Button color="inherit" component={Link} to="/sobre">
            Sobre
          </Button>
        </Toolbar>
      </AppBar>

      <AppRoutes />
    </Box>
  );
}

export default App;
