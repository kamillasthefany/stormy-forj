import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Container, Card, CardTitle, CardForm, CardFooter } from './styles';

function Login() {

  const handleChange = () => {
    console.log('mudou');
  }

  const handleClick = () => {

  }
  return (
    <Container>
      <Card id="card">
        <CardTitle><span>Arquivo</span></CardTitle>
        <CardForm>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={handleChange}
            size="small"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            onChange={handleChange}
            size="small"
          />
          <br />
          <Button variant="outlined" color="primary" onClick={handleClick}>ENVIAR</Button>
          <br />
        </CardForm>
        <CardFooter>
          <spam>Esqueceu a senha?</spam>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default Login;