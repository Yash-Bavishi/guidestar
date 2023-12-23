import React, { useContext, useState } from "react";

function TaskHeader(props) {
  const [hoverState, setHoverState] = useState(false);
  console.log("something", props.hover);
  const open_svg = (color) => {
    return (
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8.5" r="7.25" stroke={color} strokeWidth="1.5" />
      </svg>
    );
  };

  const progress_svg = (color) => {
    return (
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8.5" r="7.25" stroke={color} strokeWidth="1.5" />
        <path
          d="M8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.37827 15.1571 4.34344 13.6569 2.84315C12.1566 1.34286 10.1217 0.5 8 0.5L8 8.5L8 16.5Z"
          fill={color}
        />
      </svg>
    );
  };

  const resolved_svg = (color) => {
    return (
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8.5" r="7.25" stroke={color} strokeWidth="1.5" />
        <path
          d="M5.08337 8.50008L7.16671 10.5834L11.3334 6.41675"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const templateSyntax = (svg, property, number) => {
    return (
      <>
        {svg}
        <p>
          {property} [{number}]
        </p>
      </>
    );
  };
  /*
      return (
        <div onClick={() => console.log("HELLO")}>
          {open_svg("#44EFDA")}
          <p>
            {props.property} [{props.number}]
          </p>
        </div>
      );
          onMouseEnter={() => {
            setHoverState(true);
          }}
          onMouseLeave={() => {
            setHoverState(false);
          }}
    */

  if (props.property == "Open") {
    if (props.status === "active") {
      {
        return (
          <div className="active-text">
            {templateSyntax(open_svg("#44EFDA"), props.property, props.number)}
          </div>
        );
      }
    } else if (props.status === "inactive") {
      return (
        <div className={props.hover ? "active-text" : ":"}>
          {templateSyntax(
            open_svg(props.hover ? "#44EFDA" : "#4C4C4C"),
            props.property,
            props.number,
          )}
        </div>
      );
    }
  } else if (props.property == "Progress") {
    if (props.status === "active") {
      return (
        <div className="active-text">
          {templateSyntax(
            progress_svg("#44EFDA"),
            props.property,
            props.number,
          )}
        </div>
      );
    } else if (props.status === "inactive") {
      return (
        <div className={props.hover ? "active-text" : ""}>
          {templateSyntax(
            progress_svg(props.hover ? "#44EFDA" : "#4C4C4C"),
            props.property,
            props.number,
          )}
        </div>
      );
    }
  } else if (props.property == "Resolved") {
    if (props.status == "active") {
      return (
        <div className="active-text">
          {templateSyntax(
            resolved_svg("#44EFDA"),
            props.property,
            props.number,
          )}
        </div>
      );
    } else if (props.status == "inactive") {
      return (
        <div className={props.hover ? "active-text" : ""}>
          {templateSyntax(
            resolved_svg(props.hover ? "#44EFDA" : "#4C4C4C"),
            props.property,
            props.number,
          )}
        </div>
      );
    }
  }
}

export default TaskHeader;
