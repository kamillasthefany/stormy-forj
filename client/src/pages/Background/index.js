import React from 'react';

import { Container, Title, Stars, Stars2, Stars3, CardWrapper, Card } from './styles';

function Background() {
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
        <Card id="card" />
      </CardWrapper>
    </Container>
  );
}

export default Background;