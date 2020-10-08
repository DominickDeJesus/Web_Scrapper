import React, { useContext, useEffect } from 'react';
import { Container, Button, Tab, Tabs, Pagination } from 'react-bootstrap';
import Player from '../components/Player';
import { AppContext } from '../context/AppContext';
import TrackCard from '../components/TrackCard';
import axios from 'axios';
import { BsSkipEndFill, BsFillSkipStartFill } from 'react-icons/bs';
import { useState } from 'react';

const Home = () => {
  const { tracks, setTracks, queuePosition, setQueuePosition } = useContext(
    AppContext
  );
  const [queue, setQueue] = useState();
  const [page, setPage] = useState(1);
  const limit = 7;

  useEffect(() => {
    async function get() {
      try {
        const resp = await axios.get(`/api/tracks?limit=${limit}`);
        setTracks(resp.data);
        setQueue(resp.data);
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, [setTracks]);

  const handleSkip = () => {
    if (queuePosition < tracks.length - 1) {
      setQueuePosition(queuePosition + 1);
    }
  };
  const handleGoBack = () => {
    if (queuePosition >= 1) {
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

      <Tabs defaultActiveKey="queue" className="w-75">
        <Tab eventKey="queue" title="Queue" className="w-100">
          {tracks?.map((track, ind) => {
            return <TrackCard track={track} key={ind} />;
          })}
        </Tab>
        <Tab eventKey="archive" title="Archive" className="w-100">
          {queue?.map((track, ind) => {
            return <TrackCard track={track} key={ind} />;
          })}
        </Tab>
      </Tabs>
      <Pagination>
        <Pagination.Prev
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
        />
        <Pagination.Item active>{page}</Pagination.Item>
        <Pagination.Next onClick={() => setPage(page + 1)} />
      </Pagination>
    </Container>
  );
};

export default Home;
