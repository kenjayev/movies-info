import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header__nav">
          <div className="header__logo">
            <a href="#!">Kenjayev</a>
          </div>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#!" className="header__nav-link">
                Popular
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#!" className="header__nav-link">
                Serial
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#!" className="header__nav-link">
                Cartun
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
