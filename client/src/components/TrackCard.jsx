import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
const TrackCard = ({ track }) => {
  const { tracks, setTracks } = useContext(AppContext);

  const handleClick = (event) => {
    console.log(event.currentTarget);
    console.log(tracks, event.currentTarget.getAttribute('name'));
    const obj = tracks.find(
      (track) => String(track._id) === String(event.currentTarget.name)
    );
    console.log(obj);
    const index = tracks.indexOf(obj);
    console.log(index);
    console.log(event.currentTarget.name);
    if (index !== -1) {
      setTracks([...tracks, tracks[index]]);
      console.log(tracks);
    }
  };

  return (
    <div className="d-flex flex-direction-row w-100 border m-2 p-1">
      <Button
        variant="flat"
        className="mr-auto d-flex justify-content-center align-items-center"
      >
        <FaPlay />
      </Button>
      <div>{track.title}</div>
      <Button
        className="ml-auto d-flex justify-content-center align-items-center"
        onClick={handleClick}
        variant="flat"
        name={track._id}
      >
        <FaPlus />
      </Button>
    </div>
  );
};

export default TrackCard;
