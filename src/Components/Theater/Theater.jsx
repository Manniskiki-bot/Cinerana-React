import React, { useEffect, useState}from 'react'
import 'swiper/css'
import './Theater.css'
import MovieBox from './MovieBox';



const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=a373fbaef6fbddbe69d8244c2ea670fb"

const Theater = () => {
    const [movies, setMovies] = useState([]);
    
    
    useEffect(() => {
      fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
          console.log(data)
          setMovies(data.results)
      })
  }, [])
    
  return (
    <section className="t-wrapper">
        <div className="t-container paddings">
            <div className="title">
                <h2 className='primaryText'>IN THEATER</h2>
                <div className='Tlist flexStart'>
                </div>
            </div>

            <div className="display flexCenter">
            {movies.slice(0, 6).map((movieReq) => 
               <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>

        </div>
    </section>
  )
}

export default Theater

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter t-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}