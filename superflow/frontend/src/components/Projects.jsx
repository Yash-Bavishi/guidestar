import React from 'react'
import "./Projects.css"

function Projects(props) {
  return (
    <div className='projects'>
        <p>{props.name}</p>
        <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="#FF912C"/>
            <path d="M13.4084 9.74645C13.3686 9.34541 13.1979 9.03385 12.8963 8.81179C12.5947 8.58972 12.1854 8.47869 11.6683 8.47869C11.317 8.47869 11.0204 8.52841 10.7784 8.62784C10.5365 8.72396 10.3509 8.85819 10.2216 9.03054C10.0956 9.20289 10.0327 9.39844 10.0327 9.61719C10.026 9.79948 10.0642 9.95857 10.147 10.0945C10.2332 10.2304 10.3509 10.348 10.5 10.4474C10.6491 10.5436 10.8215 10.6281 11.017 10.701C11.2126 10.7706 11.4214 10.8303 11.6435 10.88L12.5582 11.0987C13.0024 11.1982 13.41 11.3307 13.7812 11.4964C14.1525 11.6622 14.474 11.866 14.7457 12.108C15.0175 12.3499 15.228 12.6349 15.3771 12.9631C15.5296 13.2912 15.6075 13.6674 15.6108 14.0916C15.6075 14.7147 15.4484 15.255 15.1335 15.7124C14.822 16.1664 14.3712 16.5194 13.7812 16.7713C13.1946 17.0199 12.487 17.1442 11.6584 17.1442C10.8364 17.1442 10.1205 17.0182 9.51065 16.7663C8.90412 16.5144 8.43016 16.1416 8.08878 15.6477C7.75071 15.1506 7.57339 14.5357 7.55682 13.8033H9.63991C9.66312 14.1446 9.76089 14.4297 9.93324 14.6584C10.1089 14.8838 10.3426 15.0545 10.6342 15.1705C10.9292 15.2831 11.2623 15.3395 11.6335 15.3395C11.9981 15.3395 12.3146 15.2865 12.5831 15.1804C12.8549 15.0743 13.0653 14.9268 13.2145 14.7379C13.3636 14.549 13.4382 14.3319 13.4382 14.0866C13.4382 13.858 13.3703 13.6657 13.2344 13.5099C13.1018 13.3542 12.9063 13.2216 12.6477 13.1122C12.3925 13.0028 12.0793 12.9034 11.7081 12.8139L10.5994 12.5355C9.741 12.3267 9.06321 12.0002 8.56605 11.5561C8.06889 11.112 7.82197 10.5137 7.82528 9.76136C7.82197 9.14489 7.98603 8.6063 8.31747 8.1456C8.65223 7.6849 9.11127 7.32528 9.6946 7.06676C10.2779 6.80824 10.9408 6.67898 11.6832 6.67898C12.4389 6.67898 13.0985 6.80824 13.6619 7.06676C14.2287 7.32528 14.6695 7.6849 14.9844 8.1456C15.2992 8.6063 15.4616 9.13991 15.4716 9.74645H13.4084Z" fill="black"/>
            </svg>
            <p>{props.author}</p>
        </div>
        <div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 8.62502C15.7526 9.61492 15.5213 10.5914 15.075 11.475C14.5458 12.5338 13.7323 13.4244 12.7256 14.047C11.7189 14.6696 10.5587 14.9996 9.375 15C8.3851 15.0026 7.40859 14.7713 6.525 14.325L2.25 15.75L3.675 11.475C3.2287 10.5914 2.99742 9.61492 3 8.62502C3.00046 7.44134 3.33046 6.28116 3.95304 5.27443C4.57562 4.26771 5.46619 3.4542 6.525 2.92502C7.40859 2.47872 8.3851 2.24744 9.375 2.25002H9.75C11.3133 2.33627 12.7898 2.99609 13.8969 4.10317C15.0039 5.21024 15.6638 6.68676 15.75 8.25002V8.62502Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>{props.comments}</p>
        </div>
    </div>
  )
}

export default Projects