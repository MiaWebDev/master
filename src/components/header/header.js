import React from "react";
import NavbarLeft from "../navbar-left/left";

function Header() {
  return (
    <div className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container-fluid">
        <NavbarLeft />
      </div>
    </div>
  );
}

export default Header;