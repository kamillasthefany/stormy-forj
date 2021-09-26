import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import api from '../../services/api';
import { Container } from './styles';

function Home() {

  const [endereco, setEndereco] = useState('');
  const [message, setMessage] = useState('');

  const handleApi = async () => {
    const response = await api.post('/scrapper', endereco);
    if (response?.status === 200) {
      console.log('sucesso');
      setMessage('Sucesso');
    }
    else {
      setMessage('Erro');
    }
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setEndereco(e.target.value);
  }

  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <TextField id="outlined-basic" label="Digite o endereço" variant="outlined" onChange={handleChange} />
      </div>
      <br />
      <div style={{ display: 'flex' }}>
        <Button variant="outlined" color="primary" onClick={handleApi}>ENVIAR</Button>
      </div>
      <br />
      {
        message &&
        <p>
          <span>retorno: {message}</span>
        </p>
      }
    </Container>
  );


}

export default Home;