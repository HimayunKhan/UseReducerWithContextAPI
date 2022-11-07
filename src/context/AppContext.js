import React, { useReducer } from "react";

export const Actions = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset"
};

const initalState = {
  count: 0
};

// third step: make reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case Actions.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      };
    case Actions.DECREMENT:
      return {
        ...state,
        count: state.count - action.payload
      };
    case Actions.RESET:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};
export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  //  first step after context api configuration:
  const [state, dispatch] = useReducer(reducer, initalState);

  // second step:
  const value = { state, dispatch };
  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
};
