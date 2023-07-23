import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="flexCenter f-container paddings">
            <div className="f1 ">
                <img src="/logo-no-background.png" alt="" width={100}/>
                <div className="flexColStart additional">
                  <span>5th Avenue st.manhattan</span>
                  <span>New York.NY 10001</span>
                  <span>Call us(+01)202 342 6789</span>
                </div>
            </div>
            <div className="f3">
                <h3>Legal</h3>
                <div className="links flexColStart">
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Security</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer