import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Forms from './Forms';

function Home() {
    return (
      <div>
        <Jumbotron>
          <h1>Remplire ce formulaire pour s'inscrire : </h1>
          <p>
       <Forms/>
          </p>
          
        </Jumbotron>
      </div>
    );
}

export default Home
