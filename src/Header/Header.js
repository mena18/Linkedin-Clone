// sass
import "./Header.scss";

// components
import HeaderOption from "./HeaderOption";

// icons
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SuperVisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
// import LinkedinLogo from "../../public/linkedinLogo.png";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";

import { logout, selectUser } from "../features/userSlice";
import { auth } from "../app/firebase";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import { useState } from "react";
export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={process.env.PUBLIC_URL + "/linkedinLogo.png"} alt="" />
        <div className="header__search">
          <SearchIcon className="header__search__icon" />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SuperVisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Chat" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => {}}>Profile</MenuItem>
          <MenuItem onClick={() => {}}>My account</MenuItem>
          <Divider />
          <MenuItem onClick={logoutOfApp}>Logout</MenuItem>
        </Menu>

        <div
          onClick={handleClick}
          className="headerOption"
          aria-controls="simple-menu"
          aria-haspopup="true"
        >
          <Avatar className="headerOption__icon" src={user.photoURL}>
            {user.displayName ? user.displayName[0] : ""}
          </Avatar>
          <h3 className="headerOption__title">ME</h3>
        </div>
      </div>
    </div>
  );
}
