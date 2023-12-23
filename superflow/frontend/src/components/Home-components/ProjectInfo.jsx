import React from "react";
import "./ProjectInfo.css";
function ProjectInfo(props) {
  return (
    <div className="project-info">
      <h1 className="project-info_h1">{props.info.projectName}</h1>
      <div className="project-info_details">
        <span>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="18"
              height="18"
              transform="translate(0 0.5)"
              fill="#FF912C"
            />
            <path
              d="M10.3063 7.55984C10.2765 7.25906 10.1484 7.02539 9.92223 6.85884C9.69602 6.69229 9.38903 6.60902 9.00124 6.60902C8.73775 6.60902 8.51527 6.64631 8.33381 6.72088C8.15234 6.79297 8.01314 6.89364 7.91619 7.0229C7.82173 7.15217 7.7745 7.29883 7.7745 7.46289C7.76953 7.59961 7.79812 7.71893 7.86026 7.82085C7.92489 7.92276 8.01314 8.01101 8.125 8.08558C8.23686 8.15767 8.36612 8.22106 8.51278 8.27575C8.65945 8.32795 8.81605 8.37269 8.9826 8.40998L9.66868 8.57404C10.0018 8.64861 10.3075 8.74805 10.5859 8.87234C10.8643 8.99663 11.1055 9.1495 11.3093 9.33097C11.5131 9.51243 11.671 9.72621 11.7828 9.9723C11.8972 10.2184 11.9556 10.5005 11.9581 10.8187C11.9556 11.286 11.8363 11.6912 11.6001 12.0343C11.3665 12.3748 11.0284 12.6396 10.5859 12.8285C10.146 13.0149 9.61523 13.1081 8.99379 13.1081C8.37731 13.1081 7.84038 13.0137 7.38299 12.8248C6.92809 12.6358 6.57262 12.3562 6.31658 11.9858C6.06303 11.6129 5.93004 11.1518 5.91761 10.6025H7.47994C7.49734 10.8585 7.57067 11.0723 7.69993 11.2438C7.83168 11.4128 8.00692 11.5408 8.22567 11.6278C8.44691 11.7124 8.69673 11.7546 8.97514 11.7546C9.24858 11.7546 9.48597 11.7148 9.68732 11.6353C9.89116 11.5558 10.049 11.4451 10.1609 11.3034C10.2727 11.1618 10.3287 10.9989 10.3287 10.815C10.3287 10.6435 10.2777 10.4993 10.1758 10.3825C10.0763 10.2656 9.92969 10.1662 9.7358 10.0842C9.54439 10.0021 9.30948 9.92756 9.03107 9.86044L8.19957 9.65163C7.55575 9.49503 7.04741 9.25018 6.67454 8.91708C6.30167 8.58398 6.11648 8.1353 6.11896 7.57102C6.11648 7.10866 6.23952 6.70472 6.4881 6.3592C6.73917 6.01367 7.08345 5.74396 7.52095 5.55007C7.95845 5.35618 8.45561 5.25923 9.01243 5.25923C9.57919 5.25923 10.0739 5.35618 10.4964 5.55007C10.9215 5.74396 11.2521 6.01367 11.4883 6.3592C11.7244 6.70472 11.8462 7.10494 11.8537 7.55984H10.3063Z"
              fill="black"
            />
          </svg>

          <p>Created by {props.info.creatorName}</p>
        </span>
        <span>| </span>
        <span>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M2 14.5V13.1667C2 12.4594 2.28095 11.7811 2.78105 11.281C3.28115 10.781 3.95942 10.5 4.66667 10.5H7.33333C8.04058 10.5 8.71885 10.781 9.21895 11.281C9.71905 11.7811 10 12.4594 10 13.1667V14.5M10.6667 2.58667C11.2403 2.73354 11.7487 3.06714 12.1118 3.53488C12.4748 4.00262 12.6719 4.57789 12.6719 5.17C12.6719 5.76212 12.4748 6.33739 12.1118 6.80513C11.7487 7.27287 11.2403 7.60647 10.6667 7.75334M14 14.5V13.1667C13.9966 12.5781 13.7986 12.0072 13.4368 11.5429C13.0751 11.0787 12.5699 10.7471 12 10.6M3.33333 5.16667C3.33333 5.87391 3.61428 6.55219 4.11438 7.05229C4.61448 7.55238 5.29276 7.83333 6 7.83333C6.70724 7.83333 7.38552 7.55238 7.88562 7.05229C8.38572 6.55219 8.66667 5.87391 8.66667 5.16667C8.66667 4.45942 8.38572 3.78115 7.88562 3.28105C7.38552 2.78095 6.70724 2.5 6 2.5C5.29276 2.5 4.61448 2.78095 4.11438 3.28105C3.61428 3.78115 3.33333 4.45942 3.33333 5.16667Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>

          <p>{props.info.noOfCollaborators} Collaborators</p>
        </span>
      </div>
    </div>
  );
}

export default ProjectInfo;