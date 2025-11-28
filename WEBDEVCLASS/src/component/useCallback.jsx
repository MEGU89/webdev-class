import React from "react";
import Title from "./Title";
import Header from "./Header";
import Button from "./Button";

const UseCallback = () => {
  console.log("inside callback...");

  const [color, setColor] = React.useState("blue");
  const [size, setSize] = React.useState("20px");

  const changeColor = () => {
    let Color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(Color);
  };

  const changeSize = () => {
    let Size = Math.floor(Math.random() * 50) + 30 + "px";
    setSize(Size);
  };

  return (
    <div style={{ height: "80vh" }}>
      <Title>Use Callback</Title>
      <h3 style={{ color: color, fontSize: size }}>
        welcome to use callback
      </h3>
      <button onClick={changeColor}>change color</button>
      <button onClick={changeSize}>change size</button>
    </div>
  );
};

export default UseCallback;
