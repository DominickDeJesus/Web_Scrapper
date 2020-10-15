import React, { createContext, useState } from 'react';
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);
  const [queuePosition, setQueuePosition] = useState(0);
  const [queue, setQueue] = useState([]);

  return (
    <AppContext.Provider
      value={{
        tracks,
        setTracks,
        queuePosition,
        setQueuePosition,
        queue,
        setQueue
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
