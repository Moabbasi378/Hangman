// import { useEffect, useState } from "react";//
import "./Keyboard.css";

export default function Keyboard({ checker }) {
  const letters = "qwertyuiop".split("");
  const letters2 = "asdfghjkl".split("");
  const letters3 = "zxcvbnm".split("");

  return (
    <div id="keyboard" className="keyboard">
      <div className="first-row">
        {letters.map((letter, key) => (
          <button
            id={letter}
            key={key}
            className="letter-button"
            onClick={checker}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="second-row">
        {letters2.map((letter, key) => (
          <button
            id={letter}
            key={key}
            className="letter-button"
            onClick={checker}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="third-row">
        {letters3.map((letter, key) => (
          <button
            id={letter}
            key={key}
            className="letter-button"
            onClick={checker}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}
