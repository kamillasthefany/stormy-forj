import React from 'react';
import Button from '@material-ui/core/Button';

function Home() {

  const teste = () => {
    console.log('click');
    fetch('http://localhost:5000/scrapper')
      .then(response => console.log(response));
  }

  return (
    <div>
      <h1>Pagina inicial</h1>
      <Button variant="outlined" color="primary" onClick={teste}>Outlined</Button>
    </div>
  );
}

export default Home;