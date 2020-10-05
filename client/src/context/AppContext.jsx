import React, { createContext, useState } from 'react';
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);
  const [queuePosition, setQueuePosition] = useState(0);

  return (
    <AppContext.Provider
      value={{ tracks, setTracks, queuePosition, setQueuePosition }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
