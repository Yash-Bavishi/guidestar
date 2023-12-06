import React from 'react'
import "./Onboarding-components/Stepper.css"
import "./Breadcrumb.css"

function Breadcrumb(props) {
    const urlArray = props.urlArray;



  return (
    <div>
        <div className="breadcrumb"> 
        {urlArray.map((ele, key) => 
        key === urlArray.length-1 
        ? <div key={key+1}> <a href={"/onboard" + urlArray[urlArray.length-1].url} key={key}>  {urlArray[urlArray.length-1].name }</a></div>
        : <div className="breadcrumbAlign" key={key+10}> <a href={"/onboard" + ele.url} key={key}> {ele.name} </a> <span  key={key+1} className='chevron-right'>  <svg key={key+3} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g key={key+2}opacity="0.5">
            <path key={key+3} d="M6 4L10 8L6 12" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </svg>
        </span>
</div>
        )}
        </div>
    </div>
  )
}

export default Breadcrumb