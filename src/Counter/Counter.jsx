import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Actions } from "../context/AppContext";

const Counter = ({ initalCount }) => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <>
      <h1>Counter</h1>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: Actions.INCREMENT, payload: 2 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: Actions.DECREMENT, payload: 2 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: Actions.RESET })}>Reset</button>
    </>
  );
};
export default Counter;

// useReducer hook
//useState =>manage the state of the app
// useReducer hook & array.reduce
// useReducer(reducer,initialState)
//const  [state,dispatch] = useReducer(reducer,initiState)
//
// action is nothing but an object
// {
//   type : "increment",
//   payload:2
// }
