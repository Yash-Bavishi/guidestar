import React from 'react'
import "./Bread.css"
import Project from './Project'

function Bread() {
  return (
    <div className='main'>
        <nav>
            <div className='tabs'>
                <div className="tab">Projects</div>
                <div className="tab">Settings</div>
            </div>
            <button className='blueButton'>+ Add Projects</button>
        </nav>
        <div className='hero'>
          <Project />
        </div>
        <div className="login-status"></div>
    </div>

  )
}

export default Bread