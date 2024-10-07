import './App.css';
import { Button, ButtonGroup, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import Home from './home'; 

function ChangePage() {
  const navigate = useNavigate();


  navigate('/home');
}



function App() {
  const navigate = useNavigate(); 
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}> Menu Desplegable </h1>
      <Paper>
        <ButtonGroup>
          <Button variant="contained"
            sx={{
              textAlign: 'center',
              justifyContent: 'center'
            }} >
            About
          </Button>

          <Button onClick={() => navigate('/home')}> 
            Home
          </Button>

          <Button variant='contained'>
            
            Contact
          </Button>
        </ButtonGroup>
      </Paper>
    </div>
  );
}

export default App;
