import React from "react";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/mods">Mods</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/about">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
