import React from 'react';
import { Container } from 'react-bootstrap';
import Player from '../components/Player';

const Home = () => {
  return (
    <Container className="d-flex flex-column align-items-center">
      <Player />
    </Container>
  );
};

export default Home;
