import React, { createContext, useState } from 'react';
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);
  return (
    <AppContext.Provider value={{ tracks, setTracks }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
