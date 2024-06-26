import { useState } from "react";

function NavBar() {
  const [isTog, setIsToggle] = useState(true);
  function toggle() {
    setIsToggle((isTog) => !isTog);
  }

  return (
    <>
      {
        <div className="nav">
          <div className="logo big">
            <img src="./logo.png" alt="logo" />
          </div>
          <div className="logo small" onClick={toggle}>
            <img src="./tog.gif" alt="log" />
          </div>
          {isTog && (
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
                <a href="#products">Products</a>
              </li>
            </div>
          )}
          <div className="search">
            <input type="search" placeholder="search items" />
          </div>
        </div>
      }
    </>
  );
}

export default NavBar;
