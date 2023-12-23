import React, { useState } from "react";
import TaskHeader from "../Tasks-components/TaskHeader";
import "./TaskContainer.css";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import Tasks from "./Tasks";

function TaskContainer(props) {
  const [status, setStatus] = useState("open");
  const [hoverState, setHoverState] = useState({
    open: true,
    progress: false,
    resolved: false,
  });
  console.log("KING", status);

  const hoverSetter = (placeHolder) => {
    let value = hoverState;

    if (placeHolder === "open") {
      value = { open: true, progress: false, resolved: false };
    } else if (placeHolder === "progress") {
      value = { open: false, progress: true, resolved: false };
    } else if (placeHolder === "resolved") {
      value = { open: false, progress: false, resolved: true };
    }
    console.log(value);
    setHoverState(value);
    console.log("TRUE");
  };

  const hoverLeft = () => {
    setHoverState(false);
    console.log("LEAVING");
  };

  const handler = (state) => {
    setHoverState(false);
    setStatus(state);
  };

  return (
    <div>
      <div className="taskbar">
        <span
          onMouseEnter={() => hoverSetter("open")}
          onMouseLeave={hoverLeft}
          onClick={() => handler("open")}
        >
          <TaskHeader
            property={"Open"}
            number={23}
            status={status === "open" ? "active" : "inactive"}
            hover={hoverState.open ? true : false}
          />
        </span>
        <span
          onMouseEnter={() => hoverSetter("progress")}
          onMouseLeave={hoverLeft}
          onClick={() => handler("progress")}
        >
          <TaskHeader
            property={"Progress"}
            number={23}
            status={status === "progress" ? "active" : "inactive"}
            hover={hoverState.progress ? true : false}
          />
        </span>
        <span
          onMouseEnter={() => hoverSetter("resolved")}
          onMouseLeave={hoverLeft}
          onClick={() => handler("resolved")}
        >
          <TaskHeader
            property={"Resolved"}
            number={23}
            status={status === "resolved" ? "active" : "inactive"}
            hover={hoverState.resolved ? true : false}
          />
        </span>
      </div>
      <Tasks />
    </div>
  );
}

export default TaskContainer;
