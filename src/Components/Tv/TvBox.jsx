import React from 'react'
import '../Theater/MovieBox.css'
import './Tv.css'

const IMG = "https://image.tmdb.org/t/p/w500/";
const genre = {
    10759: 'Action & Adventure ',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    10762: 'Kids',
    9648: 'Mystery  ',
    10763: 'News',
    9648: 'Mystery',
    10765: 'Sci-Fi',
    10764 : 'Reality',
    10766: 'Soap',
    10767: 'Talk',
    10768: 'Politics',
    37: 'Western',
  }
  
const TvBox = ({name, poster_path, vote_average, genre_ids}) => {
    const genreArray = genre_ids.map(id => genre[id]);
  return (
    <div>
        <div className="l-card">
      <img src={IMG+poster_path} alt="" />
      <div className="movieContent">
        <h3>{name}</h3>
        <div className="genreTags">
          {genreArray.map(genre => (
            <a key={genre} className="genreTag" href="#">{genre}</a>
          ))}
        </div>

      </div>
      </div>
    </div>
  )
}

export default TvBox