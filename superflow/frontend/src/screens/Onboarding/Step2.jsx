import React, { useState } from 'react'
import "../../components/Breadcrumb.jsx"
import Breadcrumb from '../../components/Breadcrumb.jsx'
import "./Onboarding.css"
import { Stepper } from '../../components/Onboarding-components/Stepper.jsx'
function Step1() {

  const [status, setStatus] = useState("active")

  return (
    <div className='step2'>
      <div className="stepContainer">
        <div className="left">
          <nav>
            <Breadcrumb urlArray={[{"name":"Onboarding","url": "/onboard"}, {"name":"New Project","url": "/onboard/step1"}]} />
            <a href="#"><u>Watch this installation video</u></a>
          </nav>
          <div className='form'>
            <Stepper statusArray={["complete", status, "inactive"]}/>
            <div className='formContainer'>
              <h1 className='title'>Install SDK <br /> in your Flutter App </h1>
              <small>It won't work without installing the SDK</small>
              <div className='code'><pre>$ flutter pub add codestage_requester</pre></div>
              <div className='buttonWrapper'>
                <button className="transparentButton" placeholder='Continue'>Open Pub Dev</button>
                <button className="blueButton" placeholder='Continue' onMouseEnter={() => setStatus("progress")} onMouseLeave={() => setStatus("active")}>Yes, I have installed</button>
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