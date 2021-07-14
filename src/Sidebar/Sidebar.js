import React from "react";
import "./Sidebar.scss";
import { Avatar } from "@material-ui/core";
import { ImagePath } from "../settings/Global";
function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1626238586896-3e005566e0ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={ImagePath} />
        <h2>Mina Naeem</h2>
        <h4>menan381@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p className="sidebar__stat__title">Who viwed you</p>
          <p className="sidebar__stat__number">2,534</p>
        </div>
        <div className="sidebar__stat">
          <p className="sidebar__stat__title">Views on Post</p>
          <p className="sidebar__stat__number">2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p className="sidebar__bottom__title">Recent</p>
        {recentItem("react")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("django")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
