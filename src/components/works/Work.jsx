import React from 'react'
import './work.scss'

function Work() {
  return (
    <div className='work' id='work'>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit maiores ratione id incidunt dolores esse voluptas est cumque iusto, quisquam ad, voluptatibus labore! In quis deserunt cupiditate vel facere architecto?</p>
                <span>Project</span>
              </div>
            </div>
            <div className="right">
              <img src="assets/linkein.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" className='arrow left' alt="" />
      <img src="assets/arrow.png" className='arrow right' alt="" />
    </div>
  )
}

export default Work