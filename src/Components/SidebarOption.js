import React from "react";
import "../Styles/SidebarOption.css";

export default function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      <p>{title}</p>
    </div>
  );
}
