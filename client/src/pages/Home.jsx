import React, { useContext, useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Player from '../components/Player';
import { AppContext } from '../context/AppContext';
import TrackCard from '../components/TrackCard';
import axios from 'axios';
import { BsSkipEndFill, BsFillSkipStartFill } from 'react-icons/bs';

const Home = () => {
  const { tracks, setTracks, queuePosition, setQueuePosition } = useContext(
    AppContext
  );

  useEffect(() => {
    async function get() {
      try {
        const resp = await axios.get('/api/tracks');
        setTracks(resp.data);
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, [setTracks]);

  const handleSkip = () => {
    console.log(`${queuePosition} < ${tracks.length - 1}`);
    if (queuePosition < tracks.length - 1) {
      console.log(queuePosition);
      setQueuePosition(queuePosition + 1);
    }
  };
  const handleGoBack = () => {
    if (queuePosition > 1) {
      setQueuePosition(queuePosition - 1);
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center pt-4">
      <div className="d-flex">
        <Button variant="flat" className="border" onClick={handleGoBack}>
          <BsFillSkipStartFill />
        </Button>
        <Player track={tracks[queuePosition]} />
        <Button variant="flat" className="border" onClick={handleSkip}>
          <BsSkipEndFill />
        </Button>
      </div>
      {tracks?.map((track, ind) => {
        return <TrackCard track={track} key={ind} />;
      })}
    </Container>
  );
};

export default Home;
