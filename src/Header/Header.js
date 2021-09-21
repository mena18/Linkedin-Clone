// sass
import "./Header.scss";

// variables
import { ImagePath } from "../settings/Global";

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
export default function Header() {
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
        <HeaderOption avatar={ImagePath} title="Me" />
      </div>
    </div>
  );
}
