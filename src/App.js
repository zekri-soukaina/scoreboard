import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title />
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
