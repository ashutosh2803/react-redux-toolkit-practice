import { useSelector } from "react-redux";

export const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <>
      <div>
        <h1>Movie List</h1>
        {movies.map((movie) => (
          <button style={{ margin: "0 10px" }} disabled key={movie.id}>
            {movie.name}
          </button>
        ))}
      </div>
    </>
  );
};
