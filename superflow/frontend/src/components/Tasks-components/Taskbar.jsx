import React from 'react'
import "./Tasks.css"
function Taskbar(props) {
  return (
    <div className='taskbar'>
        <button onClick={props.afunc()}>BUTTON</button>
        <div className='mini'>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8.5" r="7.25" stroke="#44EFDA" stroke-width="1.5"/>
            </svg>
            <p>Open</p>
        </div>
        <div>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8.5" r="7.25" stroke="#4C4C4C" stroke-width="1.5"/>
            <path d="M8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.37827 15.1571 4.34344 13.6569 2.84315C12.1566 1.34286 10.1217 0.5 8 0.5L8 8.5L8 16.5Z" fill="#4C4C4C"/>
            </svg>
            <p>In progress</p>
        </div>
        <div>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8.5" r="7.25" stroke="#4C4C4C" stroke-width="1.5"/>
            <path d="M5.0835 8.50008L7.16683 10.5834L11.3335 6.41675" stroke="#4C4C4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Resolved</p>
        </div>
    </div>
  )
}

export default Taskbar