import React, { useEffect, useState}from 'react'
import './Hero.css'
import { FaPlay, FaHeart, FaShareAlt, FaCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="r-wrapper">
        <div className="r-container flexCenter paddings innerWidth">
            {/* LEFT */}
            <div className='left'>
                <button className='btn btn1'>SCI-FI</button>
                <button className='btn btn2'>ACTION</button>
                <button className='btn btn3'>ADVENTURE</button>
                <div className="text marginTop innerWidth">
                    <h1>GUARDIANS OF THE <br />GALAXY <span>2015</span></h1>
                     <div className='des marginTop flexCenter'>
                     <span><FaPlay className='icon'/> <a href="#">Watch Trailer</a></span>
                     <span><FaHeart className='icon'/><a href="#">Add to Favourite</a></span>
                     <span><FaShareAlt className='icon'/><a href="#">Share</a></span>
                     </div>
                     <div className='des1 marginTop flexCenter'>
                        <span><FaCircle className='bullet'/> Run Time 2h21</span>
                        <span><FaCircle className='bullet'/> Rated PG 13</span>
                        <span><FaCircle className='bullet'/> Release 1 May 2015</span>
                     </div>
                     <button className='button marginTop'>MORE DETAILS</button>
                </div>
        
            </div>
            {/* RIGHT */}
            <div className="right">
                <img src="/guardianofthegalaxy.jpeg" alt="" className='side-img'/>
            </div>
        </div>
    </section>
  )
}

export default Hero