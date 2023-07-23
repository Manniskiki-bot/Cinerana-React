import React, { useState, useEffect } from 'react'
import List from './List'
import './Movies.css'
import Filter from './Filter'


const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=a373fbaef6fbddbe69d8244c2ea670fb"

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);
    
    useEffect(() => {
      fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
          console.log(data)
          setMovies(data.results)
          setFiltered(data.results)
      })
  }, [])
  
    
  return (
    <div>
      <div className="pagination">
      <Filter movies={movies} 
                        setFiltered={setFiltered} 
                        activeGenre={activeGenre} 
                        setActiveGenre={setActiveGenre}
                />
      </div>
      <div className="container">
        <div className="grid">
        {filtered.map((movieReq) =>
         <List key={movieReq.id} {...movieReq}/>
         )}

        </div>

      </div>
        
    </div>
  )
}

export default Movies