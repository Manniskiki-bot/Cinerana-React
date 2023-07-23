import React from 'react'
import './Movies.css'

const genreNames = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
}

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const releaseYear = (release_date) => {
  const date = new Date(release_date);
  return date.getFullYear();
};

const List = ({title, poster_path, vote_average, genre_ids, release_date}) => {
  const genreNamesArray = genre_ids.map(id => genreNames[id]);
  return (
    <div>
      <div className="list-m ">
      <div className="image-container">
          <span className='span'>{releaseYear(release_date)}</span>
          <img src={API_IMG + poster_path} alt="" />
          <div className="movie-Content">
        <h3>{title}</h3>
        <div className="genreTags">
          {genreNamesArray.map(genreName => (
            <a key={genreName} className="genreTag" href="#">{genreName}</a>
          ))}
        </div>
      </div>
        </div>
      
        </div>
      </div>

  )
}

export default List