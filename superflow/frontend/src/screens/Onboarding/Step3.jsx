import React, { useState } from 'react'
import "../../components/Breadcrumb.jsx"
import Breadcrumb from '../../components/Breadcrumb.jsx'
import "./Onboarding.css"
import { Stepper } from '../../components/Onboarding-components/Stepper.jsx'
import  styles  from "./Step3.module.css"
function Step3() {

  const [status, setStatus] = useState("active")
  const code = `class Service extends CdsService {\n   Service() : super(baseUrl: 'https://simple.api.to.add');\n Guidester.Setup(APIKEY23012XPWE’)`

  return (
    <div>
      <div className="stepContainer">
        <div className="left">
          <nav>
            <Breadcrumb urlArray={[{"name":"Onboarding","url": "/onboard"}, {"name":"New Project","url": "/onboard/step1"}]} />
            <a href="#"><u>Watch this installation video</u></a>
          </nav>
          <div className={styles.former}>
            <Stepper statusArray={["complete", "complete", status]}/>
            <div className={styles.formContainer}>
              <h1 className={styles.title}>Paste Toolbar code in home.dart</h1>
              <small>Do not modify the code below</small>
              <div className={styles.code}><pre>{code}</pre></div>
              <hr />
              <h1 className={styles.title}>Do you see the comment bubble?</h1>
              <small>Make sure you rebuild the app after pasting the code</small>
                <div className={styles.buttonWrapper}>
                  <button className="transparentButton" placeholder='Continue'>No</button>
                  <button className="blueButton" placeholder='Continue' 
                  nMouseEnter={() => setStatus("progress")} onMouseLeave={() => setStatus("active")}>Yes</button>
                </div>
            </div>
          </div>
        </div>
        <div className="right" style={{borderLeft: "2px solid white"}}>Right</div>
      </div>
    </div>
  )
}

export default Step3