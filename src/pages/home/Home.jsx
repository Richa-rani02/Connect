import React from 'react'
import "./home.scss";
export default function Home() {
  return (
    <div className="home flex-center flex-col">
    <div className='hero-img' >
        <img className="responsive-img" src="../Assets/connectlogo.png"/>
        </div>
        <button className='home-btn py-0-75'>Login</button>


    </div>
  )
}
