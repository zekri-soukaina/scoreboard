import React, { useState } from "react";
import "./Scoreboard.css";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  const [currentCount, setCourentCount] = useState(0);
  // const start_again = 0;

  // const sortedScore = [...players].sort((a, b) => {
  //   return b.score - a.score;
  // });

  const [sort_by, set_sort_by] = useState("score");
  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };
  function compare_score(player_a, player_b) {
    return player_b.score - player_a.score;
  }
  function compare_name(player_a, player_b) {
    if (player_b.name.toUpperCase() < player_a.name.toUpperCase()) {
      return 1;
    } else if (player_b.name.toUpperCase() === player_a.name.toUpperCase()) {
      return 0;
    } else {
      return -1;
    }
  }
  // const players_sorted = [...players].sort(compare_score);
  let players_sorted = [];
  if (sort_by === "score") {
    players_sorted = [...players].sort(compare_score);
    // return players_sorted
  } else {
    players_sorted = [...players].sort(compare_name);
    // return players_sorted
  }
  console.log("player:", players_sorted);

  const addPlayer = (name) => {
    console.log("Let's add a new player with the name:", name);
    const newPlayer = { id: players.length + 1, name: name, score: 0 };
    console.log("NEW PLAYER", newPlayer);
    const newPlayersArray = [...players, newPlayer];
    console.log(":NEW ARRAY OF PLAYERS", newPlayersArray);
    set_players(newPlayersArray);
  };

  return (
    <div className="Scoreboard">
      <div className="sort_order">
        <p>
          Sort order:{" "}
          <select onChange={change_sorting} value={sort_by}>
            <option value="score">Sort by score</option>
            <option value="name">Sort by name</option>
          </select>
        </p>
        <p>score:({currentCount})</p>
        {/* <p>
          score:
          {sortedScore.find((player1, player2) =>
            player2.score >= player1.score
              ? `${player2.score} `
              : `${player1.score}`
          )}
        </p> */}
        <button
          onClick={() => {
            const reset = players.map((p) => {
              if (p.score != 0) {
                return {
                  ...p,
                  score: 0,
                };
              }
              return p;
            });

            set_players(reset);
          }}>
          Reset
        </button>
        <button
          onClick={() => {
            const random = players.map((p) => {
              return {
                ...p,
                score: Math.floor(Math.random(0, 1) * 100),
              };
            });

            set_players(random);
          }}>
          Random score
        </button>
      </div>
      <p>Player's scores:</p>

      <div>
        {players_sorted.map((player) => {
          return (
            <Player
              key={player.id}
              name={player.name}
              score={player.score}
              incrementCount={() => {
                const increment = players.map((p) => {
                  if (p.id === player.id) {
                    return {
                      ...p,
                      score: p.score + 1,
                    };
                  }
                  return p;
                });

                set_players(increment);
              }}
              description={player.description}
            />
          );
        })}
      </div>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
