import "./App.css";
import { MovieInput } from "./components/MovieInput";
import { MovieList } from "./components/MovieList";

function App() {
  return (
    <>
      <div className="header">
        <h1>React Redux Toolkit</h1>
      </div>
      <div className="main-content">
        <MovieInput />
        <MovieList />
      </div>
    </>
  );
}

export default App;
