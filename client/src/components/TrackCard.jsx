import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
const TrackCard = ({ track, playing }) => {
  const { tracks, setTracks, queue, setQueue } = useContext(AppContext);

  const handleClick = (event) => {
    const obj = tracks.find((track) => track._id === event.currentTarget.name);
    const index = tracks.indexOf(obj);
    if (index !== -1) {
      setTracks([...tracks, tracks[index]]);
      console.log(tracks);
    }
  };
  const handlePlayClick = (event) => {
    const obj = tracks.find((track) => track._id === event.currentTarget.name);
    const index = tracks.indexOf(obj);
    if (index !== -1) {
      setTracks([tracks[index], ...tracks]);
    }
  };

  return (
    <div
      className={`d-flex flex-direction-row border m-2 p-1 ${
        playing ? 'playing' : ''
      }`}
    >
      <Button
        variant="flat"
        className="mr-auto d-flex justify-content-center align-items-center"
        onClick={handlePlayClick}
      >
        <FaPlay style={playing ? { color: '#ffffff' } : ''} />
      </Button>
      <div>{track.title}</div>
      <Button
        className="ml-auto d-flex justify-content-center align-items-center"
        onClick={handleClick}
        variant="flat"
        name={track._id}
      >
        <FaPlus style={playing ? { color: '#ffffff' } : ''} />
      </Button>
    </div>
  );
};

export default TrackCard;
