import React, { useState } from 'react'
import './work.scss'

function Work() {
  const [currentSlider,setCurrentSlider] = useState(0)
  const data = [
    {
      id: "1",
      icon: "assets/globe.png",
      title: "Web Design",
      desc:
      "LinkedIn clone using HTML CSS and JavaScript. ",
      img:"assets/linkein.png"
    },
    {
      id: "2",
      icon: "assets/globe.png",
      title: "Web Design",
      desc:
      "MERN Full stack project Using Jwt,Admin & User Authentication, Login and Logout, Dashboard, cart, order and disbatch. ",
      img:"assets/ecom.png"
    },
    {
      id: "3",
      icon: "assets/globe.png",
      title: "Web Design",
      desc:
      " PigGame using HTML CSS and JavaScript with multiplayer functionality. ",
      img:"assets/pigGame.png"
    }
  ]
  const handleClick = (way) => {
    way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider-1 : 2) : 
    setCurrentSlider(currentSlider<data.length-1 ? currentSlider + 1 : 0);
  }
  return (
    <div className='work' id='work'>
      <div className="slider" style={{transform:`translateX(-${currentSlider * 100}vw)`}}>
        {data.map((d) => ( 
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" className='arrow left' alt="" onClick={()=>handleClick("left")} />
      <img src="assets/arrow.png" className='arrow right ' alt="" onClick={()=>handleClick("right")}/>
    </div>
  )
}

export default Work