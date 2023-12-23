import { React, useState } from "react";
import "./Bread.css";
import Project from "./Project";
import User from "../../components/User";
import Settings from "./Settings";

function Bread() {
  const [screen, setScreen] = useState("project");
  const active = "tab tab-active";
  const disable = "tab";
  return (
    <div className="main">
      <nav>
        <div className="tabs">
          <div
            className={screen === "project" ? active : disable}
            onClick={() => setScreen("project")}
          >
            Projects
          </div>
          <div
            className={screen === "settings" ? active : disable}
            onClick={() => setScreen("settings")}
          >
            Settings
          </div>
        </div>
        <button className="bread-blueButton blueButton">+ Add Projects</button>
      </nav>
      <div className="hero">
        {screen === "project" ? <Project /> : <Settings />}
      </div>
      <div className="login-status"></div>
      <User user={{ name: "mihirsodawalla01" }} />
    </div>
  );
}

export default Bread;
