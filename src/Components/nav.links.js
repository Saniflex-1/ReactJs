import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  function humber() {
    setIsOpen((is) => !is);
  }
  return (
    <>
      <button className="humberg" onClick={humber}>
        &times;
      </button>
      {isOpen && (
        <div className="nav">
          <div className="logo">
            <h2>Logo</h2>
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
      )}
    </>
  );
}

export default NavBar;
