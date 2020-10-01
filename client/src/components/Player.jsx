import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Player = ({ track }) => {
  const { tracks, setTracks } = useContext(AppContext);

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
          console.log(tracks?.filter((_, index) => index > 0));
          setTracks(tracks?.filter((_, index) => index > 0));
        }}
      >
        <source src={track?.url} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Player;
