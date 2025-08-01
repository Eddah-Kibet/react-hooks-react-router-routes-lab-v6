import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { Route } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies") 
      .then((r) => r.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
          <h1>Home Page</h1>
          <section className="movie-list">
            {movies.map((movie) => (
              <MovieCard key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </section>
      </main>
    </>
  );
}

export default Home;
