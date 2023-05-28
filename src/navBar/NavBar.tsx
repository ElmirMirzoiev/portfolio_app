import { FC } from "react";
import s from "./NavBar.module.scss";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import WebIcon from "@mui/icons-material/Web";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className={s.navBlock}>
      <NavItem text={"Home"} path={"/"} />
      <NavItem text={"About me"} path={"/about"} />
      <NavItem text={"Portfolio"} path={"/portfolio"} />
      <NavItem text={"Contact"} path={"/contact"} />
    </div>
  );
};

type NavTextPropsType = {
  text: string;
  path: string;
};
export const NavItem: FC<NavTextPropsType> = ({ text, path }) => {
  const showIcon = () => {
    if (text === "Home") return <HomeRoundedIcon fontSize="large" />;
    if (text === "About me") return <PersonRoundedIcon fontSize="large" />;
    if (text === "Portfolio") return <WebIcon fontSize="large" />;
    if (text === "Contact") return <ChatRoundedIcon fontSize="large" />;
  };

  return (
    <div className={s.navLinkBlock}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? `${s.navLink} ${s.activeLink}` : `${s.navLink}`
        }
      >
        <div className={s.navIcon}>
          <span className={s.icon}>{showIcon()}</span>
        </div>
        <div className={s.navText}>{text}</div>
      </NavLink>
    </div>
  );
};
