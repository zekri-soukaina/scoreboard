import React from "react";
import "./Player.css";

export default function Player({ id, name, score, incrementCount }) {
  return (
    <li className="Player">
      <p>
        {name} (score:{score})
      </p>

      <button className="button" onClick={incrementCount}>
        Increment
      </button>
    </li>
  );
}
