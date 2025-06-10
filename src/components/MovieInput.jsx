import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlice";
import { useState } from "react";

export const MovieInput = () => {
  const [movieName, setMovieName] = useState("");
  const dispatch = useDispatch();

  const handleAddNewMovie = () => {
    if (movieName) {
      dispatch(addMovie(movieName));
      setMovieName("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{
          marginRight: "8px",
          height: "35px",
          padding: "0 0 0 10px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid",
        }}
        onChange={(e) => setMovieName(e.target.value)}
        value={movieName}
      />
      <button
        style={{
          background: "rgb(204, 0, 0)",
        }}
        onClick={handleAddNewMovie}
      >
        Add
      </button>
    </div>
  );
};
