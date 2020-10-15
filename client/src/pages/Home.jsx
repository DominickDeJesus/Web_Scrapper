import React, { useContext, useEffect } from 'react';
import { Container, Button, Tab, Tabs, Pagination } from 'react-bootstrap';
import Player from '../components/Player';
import { AppContext } from '../context/AppContext';
import TrackCard from '../components/TrackCard';
import axios from 'axios';
import { BsSkipEndFill, BsFillSkipStartFill } from 'react-icons/bs';
import { useState } from 'react';

const Home = () => {
  const {
    tracks,
    setTracks,
    queuePosition,
    setQueuePosition,
    queue,
    setQueue
  } = useContext(AppContext);
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
  }, [setTracks, setQueue]);

  const getNextPage = async (event) => {
    try {
      const resp = await axios.get(
        `/api/tracks?limit=${limit}&skip=${page * limit}`
      );
      console.log(resp.data);
      if (resp.data.length >= limit) {
        console.log(resp.data);
        setPage(page + 1);
        setTracks(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPreviousPage = async (event) => {
    try {
      const resp = await axios.get(
        `/api/tracks?limit=${limit}&skip=${(page - 2) * limit}`
      );
      setTracks(resp.data);
      setPage(page - 1);
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="d-flex mb-4" style={{ height: '15rem' }}>
        <Button variant="flat" className="border" onClick={handleGoBack}>
          <BsFillSkipStartFill />
        </Button>
        <Player track={queue[queuePosition]} />
        <Button variant="flat" className="border" onClick={handleSkip}>
          <BsSkipEndFill />
        </Button>
      </div>

      <Tabs defaultActiveKey="queue" className="w-100">
        <Tab.Body eventKey="queue" title="Queue" className="w-100">
          {queue?.map((track, ind) => {
            if (ind === queuePosition)
              return <TrackCard track={track} key={ind} playing={true} />;
            return <TrackCard track={track} key={ind} playing={false} />;
          })}
        </Tab.Body>
        <Tab eventKey="archive" title="Archive" className="w-100">
          {tracks?.map((track, ind) => {
            return <TrackCard track={track} key={ind} />;
          })}
          <Pagination className="d-flex justify-content-center">
            <Pagination.Prev
              onClick={() => {
                if (page > 1) getPreviousPage();
              }}
            />
            <Pagination.Item active>{page}</Pagination.Item>
            <Pagination.Next onClick={getNextPage} />
          </Pagination>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Home;
