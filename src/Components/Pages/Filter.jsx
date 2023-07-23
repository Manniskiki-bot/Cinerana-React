import React, { useEffect } from 'react'
import './Filter.css'

const Filter = ({setActiveGenre, activeGenre, setFiltered, movies}) => {
    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(movies);
            return;
        }
        const filtered = movies.filter((data) => 
        data.genre_ids.includes(activeGenre));

        setFiltered(filtered);

    }, [activeGenre]);
    
  return (
    <div>
      <div className="filter-btn">
        <button className={activeGenre === 0 ? "active" : ''}
           onClick={() => setActiveGenre(0)}>ALL
        </button>
        <button className={activeGenre === 35 ? "active" : ''}
        onClick={() => setActiveGenre(35)}>POPULAR
        </button>
        <button className={activeGenre === 28 ? "active" : ''}
        onClick={() => setActiveGenre(28)}>ACTION
        </button>
        </div>
    </div>
  )
}

export default Filter