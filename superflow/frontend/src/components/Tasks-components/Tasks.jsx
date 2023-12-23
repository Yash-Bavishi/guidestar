import React from "react";
import { useState } from "react";
import Task from "./Task";
function Tasks() {
  const tempArr = [
    {
      description: "Can we build better graphic here",
      location: "HOME",
      author: "GUEST",
      time: "5 MINS AGO",
    },
    {
      description: "Can we build better graphic here",
      location: "HOME",
      author: "GUEST",
      time: "5 MINS AGO",
    },
    {
      description: "Can we build better graphic here",
      location: "HOME",
      author: "GUEST",
      time: "5 MINS AGO",
    },
  ];
  return (
    <div className="task-list">
      {tempArr.map((item) => (
        <Task
          description={item.description}
          location={item.location}
          author={item.author}
          time={item.time}
        />
      ))}
    </div>
  );
}

export default Tasks;
