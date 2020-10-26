import React from "react";
import "../Styles/Body.css";
import Header from "./Header";

export default function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <h1>Im the body</h1>
    </div>
  );
}
