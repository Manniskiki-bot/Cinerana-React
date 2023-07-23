import React, { useState } from 'react';
import './Pricing.css'

const Pricing = () => {

    const [expanded, setExpanded] = useState(false);

  const handleBoxHover = () => {
    setExpanded(!expanded); 
  };
  const handleBoxLeave = () => {
    setExpanded(false); 
  };


  return (
        <section className="p-wrapper paddings flexCenter">
        <div className="p-container flexCenter">
        <div className="LeftSide">
        <div className={`box box-1 ${expanded ? 'expanded expandedButton' : ''} `}
        onMouseEnter={handleBoxHover}
        onMouseLeave={handleBoxLeave}>
            <img src="/wave.png" alt="" />
            <div className="textContent text1">
            <h1>$20</h1>
            <div className="col flexColStart">
             <span><img src="/correct.png" alt="" />Free Support 24/7</span>
             <hr />
             <span><img src="/correct.png" alt="" />Databases</span>
             <hr />
             <span><img src="/wrong.png" alt="" />Email</span>
             <hr />
             <span><img src="/wrong.png" alt="" />Unlimited Traffic</span>
             <hr />

            </div>
            </div>
            <button onClick={() => alert("Coming Soon 👍")}>BUY NOW</button>
        </div>
        </div>

        <div className="box box-2">
            <img src="/wave2.png" alt="" />
            <div className="textContent text2">
            <h1>$30</h1>
            <div className="col flexColStart">
             <span><img src="/correct.png" alt="" />Free Support 24/7</span>
             <hr />
             <span><img src="/correct.png" alt="" />Databases</span>
             <hr />
             <span><img src="/correct.png" alt="" />Email</span>
             <hr />
             <span><img src="/wrong.png" alt="" />Unlimited Traffic</span>
             <hr />

            </div>
            </div>
            <button onClick={() => alert("Coming Soon 👍")}>BUY NOW</button>
        </div>
        <div className="RightSide">
        <div className="box box-3">
            <img src="/wave3.png" alt="" />
            <div className="textContent text3">
            <h1>$40</h1>
            <div className="col flexColStart">
             <span><img src="/correct.png" alt="" />Free Support 24/7</span>
             <hr />
             <span><img src="/correct.png" alt="" />Databases</span>
             <hr />
             <span><img src="/correct.png" alt="" />Email</span>
             <hr />
             <span><img src="/correct.png" alt="" />Unlimited Traffic</span>
             <hr />

            </div>
            </div>
            <button onClick={() => alert("Coming Soon 👍")}>BUY NOW</button>
        </div>
        </div>
        </div>
        </section>
  )
}

export default Pricing