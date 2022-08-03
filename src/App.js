import * as React from 'react'
import { useEffect,useState } from 'react';

import './App.css';
import searchIcon from './search.svg'

import MovieCard  from './MovieCard';


// 7a229535

const API_URL = 'http://www.omdbapi.com?apikey=7a229535';

// const movie1 = {
//     Year:1999,
//     title:"spiderman",
//     poster:'N/A',
//     Type:"sciFi"
    
// }

const App = ()=>{

    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchterm] = useState(" ");

    const searchMovie = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await  response.json();

       
        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovie('spiderman');
    },[])
   

    return(
        
        
      <div className='App'>
        <h1>MovieLand</h1>
        <div className='search'>
            <input 
            placeholder='search for movies'
            value = {searchTerm}
            onChange = {(e)=>setSearchterm(e.target.value)}
            />
            <img
            src = {searchIcon}
            alt = "search"
            onClick={()=>searchMovie(searchTerm)}
            />
        </div>

        {
            movies?.length>0 
            ? (
                <div className='container'>
            {movies.map((movie)=>(
                <MovieCard movie = {movie}/>
            ))}
        </div>
            ):
            (
                <div className='empty'>
                    <h2> No movies Found</h2>
                    </div>
            )
        }

        
      </div>
  
   
    );
    
}

export default App;