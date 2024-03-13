import React from "react";

import "./styles/NavBar.css";


const NavBar: React.FC = () => {
  return (
    <div className="NavBar">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/T-38C">T-38C</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

// window.onscroll = function() {myFunction()};

// let navbar = document.getElementById("menu-bottom");

// // Check if the 'navbar' is not null
// if (!navbar) throw new Error("#menu-bottom should be defined")

// let sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     if (navbar) {
//       navbar.classList.add("sticky");
//     }
//   } else {
//     if (navbar) {
//       navbar.classList.remove("sticky");
//     }
//   }
// }


export default NavBar;
