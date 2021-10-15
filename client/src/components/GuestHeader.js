import React from "react";
import { NavLink } from "react-router-dom";

const GuestHeader = () => {
  // const [activeItem, setActiveItem] = useState("");

  // const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <div>
      {/* Guest Header starts */}

      <header id="header-inverse">
        <nav className="navbar navbar-default navbar-fixed-top menu">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index-register.html">
                <img src="/assets/images/logo.png" alt="logo" />
              </a>
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right main-menu">
                <li className="dropdown">
                  {/* <a href="a">Home</a> */}
                  <NavLink exact activeClassName="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="dropdown">
                  <NavLink exact activeClassName="active" to="/explore">
                    Explore
                  </NavLink>
                </li>
                <li className="dropdown">
                  <NavLink exact activeClassName="active" to="/features">
                    Features
                  </NavLink>
                </li>
                <li className="dropdown">
                  <NavLink exact activeClassName="active" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li className="dropdown">
                  <NavLink exact activeClassName="active" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <form className="navbar-form navbar-right hidden-sm">
                <div className="form-group">
                  <i className="icon ion-android-search"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search friends, photos, videos"
                  />
                </div>
              </form>
            </div>
          </div>
        </nav>
      </header>

      {/*Guest Header ends */}
    </div>
  );
};

export default GuestHeader;
