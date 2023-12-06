import React, { useState } from 'react'
import "../../components/Breadcrumb.jsx"
import Breadcrumb from '../../components/Breadcrumb.jsx'
import "./Onboarding.css"
import { Stepper } from '../../components/Onboarding-components/Stepper.jsx'
function Step1() {

  const [status, setStatus] = useState("active")

  return (
    <div>
      <div className="stepContainer">
        <div className="left">
          <nav>
            <Breadcrumb urlArray={[{"name":"Onboarding","url": "/onboard"}, {"name":"New Project","url": "/onboard/step1"}]} />
            <a href="#"><u>Watch this installation video</u></a>
          </nav>
          <div className='form'>
            <Stepper statusArray={[status, "inactive", "inactive"]}/>
            <div className='formContainer'>
              <h1 className='title'>Enter Project Name </h1>
              <small>This can be changed later in project settings</small>
                <input type="text" placeholder='e.g. Snapchat'onFocus={() => setStatus("progress")} onBlur={() => setStatus("active")}/>
                <div className='buttonWrapper'>
                  <button className="blueButton" placeholder='Continue'>Continue</button>
                </div>
            </div>
          </div>
        </div>
        <div className="right" style={{borderLeft: "2px solid white"}}>Right</div>
      </div>
    </div>
  )
}

export default Step1