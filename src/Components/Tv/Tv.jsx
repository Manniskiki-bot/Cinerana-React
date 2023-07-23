import React, { useEffect, useState}from 'react'
import './Tv.css'
import TvBox from './TvBox';

const API =  "https://api.themoviedb.org/3/tv/popular?api_key=a373fbaef6fbddbe69d8244c2ea670fb"
const Tv = () => {

    const [tele, setTele] = useState([]);
    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            setTele(data.results)
        })
    }, [])
  return (
    <section className="t-wrapper">
        <div className="t-container paddings">
        <div className="title">
                <h2 className='primaryText'>ON TV</h2>
            </div>
            
                <div className="display flexCenter">
            {tele.slice(0, 6).map((movieReq) => 
               <TvBox key={movieReq.id} {...movieReq}/>)}
            </div>

        
        </div>
    </section>
  )
}

export default Tv

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter t-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}