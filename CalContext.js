// CaloriesContext.js
import React, { createContext, useState, useContext } from 'react';

const CaloriesContext = createContext();

export const CaloriesProvider = ({ children }) => {
  const [totalCalories, setTotalCalories] = useState(0);

  const addCalories = (amount) => {
    setTotalCalories((prev) => prev + amount);
  };

  const resetCalories = () => {
    setTotalCalories(0);
  };

  return (
    <CaloriesContext.Provider value={{ totalCalories, addCalories, resetCalories }}>
      {children}
    </CaloriesContext.Provider>
  );
};

export const useCalories = () => useContext(CaloriesContext);
