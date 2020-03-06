import React from "react";
import HeaderComponent from "../../StyledComponents/misc/Header";
import { Link } from "react-router-dom";

const Header = props => {
  const publicLInksStyle = {
    display: props.private ? "none" : "inline"
  };
  return (
    <header>
      <HeaderComponent>
        <ul>
          <div className="left">
            <li className="brand-name">
              <Link to={props.private ? "/dashboard" : "/"}>
                Ticketing App
              </Link>
            </li>
          </div>
          <div
            style={{
              display: props.notfound ? "none" : "flex"
            }}
            className="right"
          >
            <li style={publicLInksStyle} className="login">
              <Link to="/login">Log In</Link>
            </li>
            <li style={publicLInksStyle} className="register">
              <Link to="/register">Sign Up</Link>
            </li>
            <li
              style={{ display: props.public ? "none" : "inline" }}
              className="settings"
            >
              <Link to="/settings">Settings</Link>
            </li>
            <li
              style={{
                display: props.public ? "none" : "inline",
                paddingLeft: "1rem"
              }}
              className="logout"
            >
              <a href="#">Logout</a>
            </li>
          </div>
        </ul>
      </HeaderComponent>
    </header>
  );
};

export default Header;
