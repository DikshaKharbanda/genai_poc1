import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [aadhaar, setAadhaar] = useState(null);
  const [pan, setPan] = useState(null);

  const updateAadhaar = (data) => {
    setAadhaar(data);
  };

  const updatePan = (data) => {
    setPan(data);
  };

  return (
    <AppContext.Provider value={{ aadhaar, pan, updateAadhaar, updatePan }}>
      {children}
    </AppContext.Provider>
  );
};
