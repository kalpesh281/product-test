import React, { useState } from "react";
import "./Navbar.css";
import logo from '../assets/PLLogo.png'
const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch); // Toggle the search bar visibility
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value; // Access the search input value
    alert(`Searching for: ${query}`);
    e.target.reset(); // Clear the search bar
    setShowSearch(false); // Optionally collapse the search bar
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Your Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li className={`search-container ${showSearch ? "active" : ""}`}>
          {showSearch && (
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                name="search"
                className="search-box"
                placeholder="Search..."
              />
            </form>
          )}
          <button className="search-btn" onClick={handleSearchClick}>
            🔍
          </button>
        </li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#logout">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
