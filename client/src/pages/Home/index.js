import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import api from '../../services/api';
import { Container, Card } from './styles';

function Home() {

  const [endereco, setEndereco] = useState('');
  const [message, setMessage] = useState('');

  const handleApi = async () => {
    const response = await api.post('/scrapper', endereco);
    if (response?.status === 200) {
      setMessage('Sucesso');
    }
    else {
      setMessage('Erro');
    }
  }

  const handleChange = (e) => {
    setEndereco(e.target.value);
  }

  return (
    <Container id='container'>
      <Card id='card'>
        <TextField
          id="outlined-basic"
          label="Digite o endereço"
          variant="outlined"
          onChange={handleChange}
        />
        <br />
        <Button variant="outlined" color="primary" onClick={handleApi}>ENVIAR</Button>
        <br />
        <div>
          {
            message &&
            <p>
              <span>retorno: {message}</span>
            </p>
          }
        </div>
      </Card>
    </Container>
  );


}

export default Home;