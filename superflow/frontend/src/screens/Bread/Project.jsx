import React from 'react'
import Projects from '../../components/Projects'
import "./Project.css"

function Project() {
  return (
    <div className='project'>
        <div className='project-header'>
            <p>Name</p>
            <p>Created By</p>
            <p>Total Comments</p>
        </div>
        <hr />
        <Projects name="Snapdrop" author="Saurabh" comments="32(2 New)" /> 
    </div>
  )
}

export default Project