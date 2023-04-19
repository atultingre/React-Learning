import React, { useState } from "react";
import Square from "./Square";
import Input from "./Input";
import "./ColorsName.css";

const ColorsName = () => {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);
  const [randomColorValue, setRandomColorValue] = useState("");

  const randomColor = () => {
    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);
    const randomColor = `#${hexVal}`;
    setRandomColorValue(randomColor);
    setColorValue(randomColor);
    // setHexValue(randomColor);
  };

  return (
    <div className="color-name">
      <h3>Get the Color Code</h3>
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
        randomColor={randomColorValue}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
        randomColor={randomColor}
      />
    </div>
  );
};

export default ColorsName;
