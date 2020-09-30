import React from 'react';
import { Button } from 'react-bootstrap';
import { AiFillPlayCircle, AiOutlinePlus } from 'react-icons/ai';

const TrackCard = ({ track, handleClick }) => {
  return (
    <div className="d-flex flex-direction-row w-100 border m-2 p-1">
      <Button className="mr-auto">
        <AiFillPlayCircle />
      </Button>
      <div>{track.title}</div>
      <Button className="ml-auto" onClick={handleClick} name={track?._id}>
        <AiOutlinePlus></AiOutlinePlus>
      </Button>
    </div>
  );
};

export default TrackCard;
