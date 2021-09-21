import React from "react";
import { Avatar } from "@material-ui/core";
import "./HeaderOption.scss";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user.photoURL}>
          {user.displayName ? user.displayName[0] : ""}
        </Avatar>
      )}

      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
