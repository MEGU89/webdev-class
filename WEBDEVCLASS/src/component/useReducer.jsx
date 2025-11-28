import React, { useReducer } from 'react';
const UseReducer = () => {
  const initialState = {
    color: "#100d1dff",
    size: "30px"
  };
  const reducer = (state, action) => {
    const key=`${action.color}_${action.size}`;
    switch (key) {
      case "RED_20px":
        return { color: "#d72525ff", size: action.size };
      case "Green_20px":
        return { color: "#3ae374", size:action.size };
      case "Pink_20px":
        return { color: "#ff6f91", size: action.size };
      case "#100d1dff_40px":
        return { ...state, size: action.size };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ height: "100vh" }}>
      <h2 style={{ color: state.color, fontSize: state.size }}>Use reducer example</h2>
      <button className='btn btn-primary m-2' onClick={() => dispatch("RED")}>Red</button>
      <button className='btn btn-primary m-2' onClick={() => dispatch("Green")}>Green</button>
      <button className='btn btn-primary m-2' onClick={() => dispatch("Pink")}>Pink</button>
      <button className='btn btn-primary m-2' onClick={() => dispatch("40px")}>SIZEReducer</button>
    </div>
  );
};

export default UseReducer;