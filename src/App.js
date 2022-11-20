import { useEffect } from "react";
import './index.css'
import SearchIcon from './search.svg'

const API_URL= 'http://www.omdbapi.com/?i=tt3896198&apikey=5efea692';

function App() {

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('student of the year');
  }, []);

  return (
    <div className="app">
      <h1>Movie Search App</h1>

      <div className="search">
        <input 
          placeholder="Enter movie name"  
          type="text"
          value="batman"
          onChange={() => {}}
        />

        <img src={SearchIcon} alt="Search logo"/> 
      </div>
    </div>
  );
}

export default App;
