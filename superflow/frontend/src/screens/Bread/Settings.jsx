import React from "react";
import "./Settings.css";

function Settings() {
  return (
    <div className="settings">
      <div className="account-info">
        <h1>Account info</h1>
        <div className="fields">
          <input type="text" name="name" placeholder="You name ?" />
          <input type="email" name="email" placeholder="Email" />
        </div>
        <button className="settings-blueButton blueButton disabled">
          Save Changes
        </button>
      </div>
      <div className="subscription-info">
        <h1>Subscription Info</h1>
        <span className="subscription-info-display">
          <p>Pro Plan</p>
          <p>$8/mo</p>
        </span>
        <button className="blueButton">Save Changes</button>
      </div>
    </div>
  );
}

export default Settings;
