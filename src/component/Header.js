import React from "react";
class Header extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-dark px-3 navbar-dark">
          <div className="container">
            <a className="navbar-brand"> logo</a>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Page
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
