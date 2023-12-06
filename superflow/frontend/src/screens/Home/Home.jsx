import React, { useEffect } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
// import ProjectInfo from '../../components/ProjectInfo'
import Tasks from '../../components/Tasks-components/Tasks'
import "./Home.css"
function Home() {

  // Validation for authentication (if not redirect to /login)
  useEffect(() => {})

  return (
    <div>
      {/* mame of urlArray will be fetched from database */}
      <Breadcrumb urlArray={[{"name": "Snapdrop", "url": "/home"}]} />
      {/* Both properties of info will be fetched from database */}
      {/* <ProjectInfo info={{"projectName": "Snapdrop", "creatorName": "You", "noOfCollaborators": "0"}}  /> */}
      <div className='tutorial'>
        <div className='guides'>
          <small>LEARN HOW TO USE GUIDESTAR</small>
          <div className='link'>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.64718e-08 0.66661V11.3333C-3.3396e-05 11.4519 0.0315832 11.5684 0.0915877 11.6707C0.151592 11.773 0.237811 11.8575 0.34135 11.9154C0.444888 11.9733 0.561996 12.0025 0.68059 12C0.799184 11.9975 0.914969 11.9634 1.016 11.9013L9.68267 6.56794C9.77973 6.5083 9.8599 6.42477 9.9155 6.32534C9.97111 6.2259 10.0003 6.11387 10.0003 5.99994C10.0003 5.88602 9.97111 5.77399 9.9155 5.67455C9.8599 5.57512 9.77973 5.49159 9.68267 5.43194L1.016 0.0986104C0.914969 0.0364535 0.799184 0.00237861 0.68059 -9.87032e-05C0.561996 -0.00257601 0.444888 0.026634 0.34135 0.0845176C0.237811 0.142401 0.151592 0.226862 0.0915877 0.329186C0.0315832 0.43151 -3.3396e-05 0.54799 2.64718e-08 0.66661Z" fill="#2F59ED"/>
            </svg>
            <p>How to leave a comment</p>
          </div>
          <div className='link'>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.64718e-08 0.66661V11.3333C-3.3396e-05 11.4519 0.0315832 11.5684 0.0915877 11.6707C0.151592 11.773 0.237811 11.8575 0.34135 11.9154C0.444888 11.9733 0.561996 12.0025 0.68059 12C0.799184 11.9975 0.914969 11.9634 1.016 11.9013L9.68267 6.56794C9.77973 6.5083 9.8599 6.42477 9.9155 6.32534C9.97111 6.2259 10.0003 6.11387 10.0003 5.99994C10.0003 5.88602 9.97111 5.77399 9.9155 5.67455C9.8599 5.57512 9.77973 5.49159 9.68267 5.43194L1.016 0.0986104C0.914969 0.0364535 0.799184 0.00237861 0.68059 -9.87032e-05C0.561996 -0.00257601 0.444888 0.026634 0.34135 0.0845176C0.237811 0.142401 0.151592 0.226862 0.0915877 0.329186C0.0315832 0.43151 -3.3396e-05 0.54799 2.64718e-08 0.66661Z" fill="#2F59ED"/>
            </svg>
            <p>How to share with clients</p>
          </div>
        </div>
      </div>
      <Tasks />
    </div>
  )
}

export default Home