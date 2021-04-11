import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <span className={s.socialLogo}>Social</span>
    </header>
  );
};

export default Header;
