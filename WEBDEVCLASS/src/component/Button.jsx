import React from "react";
import Title from "./Title";
import UseCallback from "./useCallback";
const Button = ({ children, onClick }) => {
  const myClick = () => {
    console.log("Button clicked!");
    if (onClick) onClick();
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={myClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
