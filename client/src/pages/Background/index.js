import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Container, Title, Stars, Stars2, Stars3, CardWrapper, Card } from './styles';

function Background() {
  const handleChange = () => {
    console.log('mudou');
  }

  const handleClick = () => {

  }
  return (
    <Container>
      <Stars />
      <Stars2 />
      <Stars3 />
      {/* <Title>
        <span>
          PURE CSS
        </span>
        <br />
        <span>
          PARALLAX PIXEL STARS
        </span>
      </Title> */}
      <CardWrapper>
        <Card id="card">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={handleChange}
            size="small"
            color="secondary"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            onChange={handleChange}
            size="small"
            color="secondary"
          />
          <br />
          <Button variant="outlined" color="primary" onClick={handleClick}>ENVIAR</Button>
          <br />
        </Card>
      </CardWrapper>
    </Container>
  );
}

export default Background;