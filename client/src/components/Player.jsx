import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Player = ({ track }) => {
  const { queuePosition, setQueuePosition } = useContext(AppContext);

  return (
    <div className="d-flex flex-column">
      <h3>{track?.title}</h3>
      <p style={{ textAlign: 'left', padding: '2rem' }} className="my-auto">
        {track?.description}
      </p>
      <audio
        controls
        autoPlay={false}
        key={track?._id}
        className="w-75 mx-auto"
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
