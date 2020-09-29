import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Player = () => {
  const { tracks, setTracks } = useContext(AppContext);

  useEffect(() => {
    async function get() {
      try {
        const resp = await axios.get('/api/tracks');
        setTracks(resp.data);
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, []);

  return (
    <div>
      <h3>{tracks[0]?.title}</h3>
      <p>{tracks[0]?.description}</p>
      <audio
        controls
        key={tracks[0]?._id}
        className="m-3"
        onEnded={(_, index) => {
          setTracks(tracks?.filter(() => index !== 0));
        }}
      >
        <source src={tracks[0]?.url} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Player;
