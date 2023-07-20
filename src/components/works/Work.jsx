import React, { useState } from 'react'
import './work.scss'

function Work() {
  const [currentSlider,setCurrentSlider] = useState(0)
  const data = [
    {
      id: "1",
      icon: "assets/mobile.png",
      title: "Web Design",
      desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      img:"assets/Mp.png"
    },
    {
      id: "2",
      icon: "assets/globe.png",
      title: "Mobile Application",
      desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      img:"assets/bp.png"
    },
    {
      id: "3",
      icon: "assets/writing.png",
      title: "Branding",
      desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      img:"assets/Mp.png"
    }
  ]
  const handleClick = (way) => {
    way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider-1 : 2) : 
    setCurrentSlider(currentSlider<data.length -1 ? currentSlider + 1 : 0);
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
              <img src="assets/linkein.png" alt="" />
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