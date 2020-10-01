import React from 'react';
import { Button } from 'react-bootstrap';
import { FaPlay, FaPlus } from 'react-icons/fa';

const TrackCard = ({ track, handleClick }) => {
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
        name={track?._id}
      >
        <FaPlus />
      </Button>
    </div>
  );
};

export default TrackCard;
