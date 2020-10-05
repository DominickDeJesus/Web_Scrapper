import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Player = ({ track }) => {
  const { queuePosition, setQueuePosition } = useContext(AppContext);

  return (
    <div>
      <h3>{track?.title}</h3>
      <p>{track?.description}</p>
      <audio
        controls
        autoPlay={true}
        key={track?._id}
        className="m-3"
        onEnded={() => {
          setQueuePosition(queuePosition + 1);
        }}
      >
        <source src={track?.url} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Player;
