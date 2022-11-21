import { useEffect, useState } from "react";
import './index.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL= 'http://www.omdbapi.com/?i=tt3896198&apikey=5efea692';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('drishyam');
  }, []);

  return (
    <div className="app">
      <h1>Movie Search App</h1>

      <div className="search">
        <input 
          placeholder="Enter movie name"  
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img 
          src={SearchIcon} 
          alt="Search logo"
          onClick={() => searchMovies(searchTerm)}  
          /> 
      </div>

      {
        movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
          ) : (
              <div className="empty">
                <h2></h2>
              </div>
              )
      }

    </div>
  );
}

export default App;
