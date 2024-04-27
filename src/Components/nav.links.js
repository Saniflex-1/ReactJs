// import { useState } from "react";

function NavBar() {
  return (
    <>
      {/* <button className="humberg" onClick={humber}>
        &times;
      </button> */}
      {
        <div className="nav">
          <div className="logo">
            <img src="./tog.gif" alt="log" />
          </div>
          <div className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contacts</a>
            </li>
            <li>
              <a href="/">Service</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
          </div>

          <div className="search">
            <input type="text" placeholder="search items" />
          </div>
        </div>
      }
    </>
  );
}

export default NavBar;
