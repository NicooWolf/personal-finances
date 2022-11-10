import React from "react";
import "./index.scss";

const Header = () => {
  return (
    <>
      <header className="header__main">
        <a href="#">
          <img src="../../assets/logo.png" alt="logo" />
        </a>
        <h1>Titulo</h1>
        <h3>Info</h3>
      </header>
    </>
  );
};

export default Header;
