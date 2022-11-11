import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./index.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => ({
            backgroundColor: isActive ? "black" : "white"
          })}
        >
          <img src={logo} alt="logo" />
        </NavLink>
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => ({
            backgroundColor: isActive ? "black" : "white"
          })}
        >
          <h1 className="header__title">Finanzas Personales</h1>
        </NavLink>

        <div className="header__labels">
          <NavLink
            to="/cargar-gastos"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <h3>Cargar Gastos</h3>
          </NavLink>
          <NavLink
            to="/tarjetas"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <h3>Tarjetas</h3>
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
