import React from "react";
import "../Styles/Login.css";
import { accessUrl } from "../spotify";

export default function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={accessUrl}>LOGIN TO THE SPOTIFY CLONE APP</a>
    </div>
  );
}
