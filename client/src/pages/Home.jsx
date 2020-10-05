import React, { useContext, useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Player from '../components/Player';
import { AppContext } from '../context/AppContext';
import TrackCard from '../components/TrackCard';
import axios from 'axios';
import { BsSkipEndFill, BsFillSkipStartFill } from 'react-icons/bs';

const Home = () => {
  const { tracks, setTracks } = useContext(AppContext);
  const [queuePosition, setQueuePosition] = useState(0);

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

  const handleClick = (event) => {
    const obj = tracks.find(
      (track) => String(track._id) === String(event.target.name)
    );
    console.log(obj);
    const index = tracks.indexOf(obj);
    console.log(index);
    console.log(event.target.name);
    if (index !== -1) {
      setTracks([...tracks, tracks[index]]);
      console.log(tracks);
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
        return <TrackCard track={track} key={ind} handleClick={handleClick} />;
      })}
    </Container>
  );
};

export default Home;
