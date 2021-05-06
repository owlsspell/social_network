import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <span className={s.socialLogo}>Social</span>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <h3>{props.login}</h3>
        ) : (
          <NavLink to={"/login"}>LOGIN</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
