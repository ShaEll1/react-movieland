



import { useState, useEffect } from "react"; 
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './Search.svg';


//298028e6

const API_URL ="http://www.omdbapi.com?apikey=298028e6"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  

  
  return (
    
     <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
        placeholder ="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />



<img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
 
      </div>

      {movies?.length > 0 ? (
  <div className="container">
    {movies.map((movie) => (
      <MovieCard key={movie.imdbID} movie={movie} />
    ))}
  </div>
) : (
  <div className="empty">
    <h2>No Movies Found</h2>
  </div>
)}


     </div>
     
    
  );
}

export default App;


