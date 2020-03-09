import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.nav`
  background: #3672a4;
  padding: 0.7rem 0.45rem;
  color: white;
  box-shadow: 0px 4px 3px 0px rgba(128, 128, 128, 1);

  @media screen and (max-width: 360px) {
    & ~ div {
      padding-top: 6rem;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }

    @media screen and (max-width: 370px) {
      padding-right: .5rem;
      padding-left: .5rem;
    }

    .left {
      flex-basis: 50%;

      @media screen and (max-width: 470px) {
        margin-bottom: 1.5rem;
      }

      .brand-name {
        a {
          font-size: 1.7rem;
          font-weight: bold;
          position: relative;
          align-items: center;
        }
      }
    }

    .right {
      display: flex;
      flex-basis: 30%;
      justify-content: space-around;
      font-weight: bold;

      @media screen and (max-width: 1120px) {
        flex-basis: 40%;
        justify-content: space-between;
      }

      @media screen and (max-width: 780px) {
        flex-basis: 60%;
      }

      @media screen and (max-width: 600px) {
        flex-basis: 80%;
      }

      @media screen and (max-width: 500px) {
        flex-basis: 95%;
        justify-content: flex-end;
      }

      li {
        font-size: 1.1rem;
        transition: ease 0.4s;

        &:hover {
          transform: scale(1.045);
        }

        @media screen and (max-width: 500px) {
          a {
            padding: .5rem;
            margin: .5rem;
          }
        }
      }
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;


// when API is ready, bring redux and only render authLinks when auth state is not loading and isAuthenticated is true.
export default () => {
  const publicLinks = (
    <ul>
      <div className="left">
        <li className="brand-name">
          <Link to="/">Ticketr</Link>
        </li>
      </div>
      <div className="right">
        <li className="about">
          <Link to="/about">About</Link>
        </li>
        <li className="login">
          <Link to="/login">Log In</Link>
        </li>
        <li className="register">
          <Link to="/register">Create Event</Link>
        </li>
      </div>
    </ul>
  );

  const authLinks = (
    <ul>
      <div className="left">
        <li className="brand-name">
          <Link to="/">Ticketr</Link>
        </li>
      </div>
      <div className="right">
        <li className="dashboard">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="settings">
          <Link to="/settings">Settings</Link>
        </li>
        <li className="logout">
          <a href="!#">Logout</a>
        </li>
      </div>
    </ul>
  );
  return (
    <header>
      <HeaderStyle>
        {authLinks}
      </HeaderStyle>
    </header>
  );
};
