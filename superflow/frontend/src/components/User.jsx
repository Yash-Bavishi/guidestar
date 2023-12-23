import React from "react";
import "./User.css";
function User(props) {
  console.log(props.user.name);
  return (
    <div className="user">
      <span id="user_alpha">M</span>
      <div>
        <p> {props.user.name}</p>
        <div className="user_logout-link">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 6V4.5C10.5 4.10218 10.342 3.72064 10.0607 3.43934C9.77936 3.15804 9.39782 3 9 3H3.75C3.35218 3 2.97064 3.15804 2.68934 3.43934C2.40804 3.72064 2.25 4.10218 2.25 4.5V13.5C2.25 13.8978 2.40804 14.2794 2.68934 14.5607C2.97064 14.842 3.35218 15 3.75 15H9C9.39782 15 9.77936 14.842 10.0607 14.5607C10.342 14.2794 10.5 13.8978 10.5 13.5V12M6.75 9H15.75M15.75 9L13.5 6.75M15.75 9L13.5 11.25"
              stroke="white"
              strokeWidth="1.125"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <a href="/login"> Logout </a>
        </div>
      </div>
    </div>
  );
}

export default User;
