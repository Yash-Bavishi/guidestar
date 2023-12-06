import React from 'react'
import "./Stepper.css"

/* STATES 

1. Complete 
2. Active
3. Progress
4. Inactive

*/

/*

  Complete and last = number 
  Complete but not last = number and bars
    Active and last =  number 
    Active but not last = number and bars
    inactive and last  = number
    Inactive but not last = number and bars
*/

function NoProgress() {
  return (
      <div className="progress">
        <span className="inactive fullStepperHeight"></span>
        <span className="inactive halfStepperHeight"></span>
        <span className="inactive miniStepperHeight" ></span>
        <span className="inactive miniStepperHeight" ></span>
        <span className="inactive miniStepperHeight" ></span>
        <span className="inactive miniStepperHeight" ></span>
        <span className="inactive halfStepperHeight"></span>
        <span className="inactive fullStepperHeight"></span>
      </div>
    )

}

function HalfProgress() {
  return (
      <div className='progress' >
        <span className="active fullStepperHeight"></span>
        <span className="active halfStepperHeight"></span>
        <span className="active miniStepperHeight" ></span>
        <span className="active miniStepperHeight" ></span>
        <span className="inactive miniStepperHeight" ></span>
        <span className="inactive miniStepperHeight" ></span>
        <span className="inactive halfStepperHeight"></span>
        <span className="inactive fullStepperHeight"></span>
      </div>
    )
}

function FullProgress() {
  return (
      <div className='progress' >
        <span className="active fullStepperHeight"></span>
        <span className="active halfStepperHeight"></span>
        <span className="active miniStepperHeight" ></span>
        <span className="active miniStepperHeight" ></span>
        <span className="active miniStepperHeight" ></span>
        <span className="active miniStepperHeight" ></span>
        <span className="active halfStepperHeight"></span>
        <span className="active fullStepperHeight"></span>
      </div>
  )
}

function CompleteProgress() {
  return (
      <div className='progress' >
        <span className="complete fullStepperHeight"></span>
        <span className="complete halfStepperHeight"></span>
        <span className="complete miniStepperHeight" ></span>
        <span className="complete miniStepperHeight" ></span>
        <span className="complete miniStepperHeight" ></span>
        <span className="complete miniStepperHeight" ></span>
        <span className="complete halfStepperHeight"></span>
        <span className="complete fullStepperHeight"></span>
      </div>
  )
}


export function ProgressStepper (props) {
  if (props.status !== "last") {
  if (props.ele === "active"){
    return (
      <><div className='stepperNumberActive stepperNumber'>0{props.index + 1}</div> <HalfProgress /></>
    )
  }

  else if (props.ele === "progress") {
    return (
        <><div className='stepperNumberActive stepperNumber'>0{props.index + 1}</div> <FullProgress /></>
      )
  }
  else {
    return (
        <><div className='stepperNumberInactive stepperNumber' >0{props.index + 1}</div><NoProgress /></>
      )
    }
  } else {
    if (props.ele === "active"){
      return (
        <><div className='stepperNumberActive stepperNumber'>0{props.index + 1}</div></>
      )
    }

    else if (props.ele === "progress") {
      return (
          <><div className='stepperNumberActive stepperNumber'>0{props.index + 1}</div> </>
        )
    }
    else {
      return (
          <><div className='stepperNumberInactive stepperNumber' >0{props.index + 1}</div></>
        )
      }

  }


}

export function InactiveStepper (props) {
  if (props.status === "last") {
    return (
      props.ele === "inactive" 
        ? <><div className='stepperNumberActive stepperNumber'>0{props.index + 1}</div> <NoProgress/></>
        : <><div className='stepperNumberInactive stepperNumber' >0{props.index + 1}</div></>
      )
  }
}


function CompleteStepper (props) {
  if (props.status === "last") {
    return (
      <>
        <div className='completeNumber'>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.3335 8.49984L6.66683 11.8332L13.3335 5.1665" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className='completeNumber'>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.3335 8.49984L6.66683 11.8332L13.3335 5.1665" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <CompleteProgress />
      </>
    )
  }
}

export function Stepper(props) {

    const status = props.statusArray

  return (
    <div>
        <div className='stepperLayout'>
        {
            status.map((ele,index) => 
              (index === status.length-1) 
              ? (ele === "complete") 
                ? <CompleteStepper staus="last" key={index}/> 
                : <ProgressStepper status="last" index={index} ele={ele} key={index}/>
              : (ele === "complete") 
                ? <CompleteStepper status="looping" key={index}/> 
                : <ProgressStepper status="looping"index={index} ele={ele} key={index}/>
            )
        }
        </div>
    </div>
  )
}
