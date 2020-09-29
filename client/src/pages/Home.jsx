import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Player from '../components/Player';
import { AppContext } from '../context/AppContext';
import TrackCard from '../components/TrackCard';

const Home = () => {
  const { tracks } = useContext(AppContext);

  return (
    <Container className="d-flex flex-column align-items-center">
      <Player />
      {tracks?.map((track) => {
        return <TrackCard track={track} />;
      })}
    </Container>
  );
};

export default Home;
