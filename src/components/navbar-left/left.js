import React from "react";
import { NavLink } from "react-router-dom";
import './left.css';

// <> == <React.Fragment>
const NavbarLeft = () => (
  <>
    <a className="navbar-brand" href="/">React Project</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={'nav-link'} to="/">Asosiy Sahifa</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={'nav-link'} to="/test">Test</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={'nav-link'} to="/todo">Todo</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={'nav-link'} to="/films">Filmlar</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Qidiruv" />
        <button className="btn btn-outline-success" type="submit">Qidiruv</button>
      </form>
    </div>
  </>
);

export default NavbarLeft;