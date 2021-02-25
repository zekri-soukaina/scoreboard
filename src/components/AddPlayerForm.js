import React, { useState } from "react";
import "./AddPlayerForm.css";

export default function AddPlayerForm(props) {
  const [name, setName] = useState("");

  function submit(event) {
    event.preventDefault();
    props.addPlayer(name);
    setName("");
  }

  return (
    <div className="AddPlayerForm">
      <form>
        New Player :{" "}
        <input
          onChange={(event) => {
            console.log("new input .value:", event.target.value);
            setName(event.target.value);
          }}
          type="text"
          placeholder="pase mame of player!"
        />{" "}
      </form>
      <button onClick={submit}>Add</button>
    </div>
  );
}
