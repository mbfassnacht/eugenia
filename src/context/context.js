import React, { createContext, useReducer } from "react";

import appReducer from "./reducer";

const initialState = {
  language: "es_UY",
};

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function setLanguage(employee) {
    dispatch({
      type: "SET_LANGUAGE",
      payload: employee,
    });
  }

  return (
    <Context.Provider
      value={{
        language: state.language,
        setLanguage,
      }}
    >
      {children}
    </Context.Provider>
  );
};
