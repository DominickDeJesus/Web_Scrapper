import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { AiFillPlayCircle, AiOutlinePlus } from 'react-icons/ai';

const TrackCard = ({ track }) => {
  const { tracks } = useContext(AppContext);
  return (
    <div className="d-flex flex-direction-row w-100 border m-2 p-1">
      <Button className="mr-auto">
        <AiFillPlayCircle />
      </Button>
      <div>{track.title}</div>
      <Button className="ml-auto">
        <AiOutlinePlus></AiOutlinePlus>
      </Button>
    </div>
  );
};

export default TrackCard;
