import React from "react";
import "./Task.css";
function Task(props) {
  const bulletPointSvg = (
    <svg
      width="5"
      height="6"
      viewBox="0 0 5 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.5" cx="2.5" cy="3" r="2.5" fill="white" />
    </svg>
  );

  const checkBoxSvg = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.32">
        <circle cx="9" cy="9" r="8.375" stroke="white" strokeWidth="1.25" />
        <path
          d="M5.71875 9L8.0625 11.3438L12.75 6.65625"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  return (
    <div className="task">
      <h4>{props.description}</h4>
      <div className="task-details">
        <div className="task-details_left">
          <p>{props.location}</p>
          {bulletPointSvg}
          <p>{props.author}</p>
          {bulletPointSvg}
          <p>{props.time}</p>
        </div>
        {checkBoxSvg}
      </div>
      <hr />
    </div>
  );
}

export default Task;
