import React, { useState } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import SolidBtn from "./Buttons/SolidBtn";
import Consultation from "./Popups/Consultation";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && (
        <Consultation toggleState={setShowPopup} toggleValue={false} />
      )}
      <Wrapper>
        <div className={`navbar`}>
          <div className="nav-content container">
            <div className="container">
              <div className="logo">
                <Link to={"/"}>
                  ASP<span>Advocates</span>
                </Link>
              </div>
              <ul className="nav-link">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>

                <li className={"megamenu-link"}>
                  <NavLink to={"/practice"} className={"megamenu-link"}>
                    PROFICIENCY
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/key-contacts"}>KEY CONTACTS</NavLink>
                </li>
                <li className={"megamenu-link"}>
                  <NavLink to={"/career"} className={"megamenu-link"}>
                    careers
                  </NavLink>
                  {/* <div className="megamenu">
                    <ul>
                      <li>
                        <NavLink to={"/internship"}>Internship</NavLink>
                      </li>
                      <hr />
                      <li>
                        <NavLink to={"job-applications"}>Job Applications</NavLink>
                      </li>
                    </ul>
                  </div> */}
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
              <div className="btn">
                <div className="menu">
                  <FiMenu
                    size={25}
                    cursor={"pointer"}
                    onClick={() => setToggle(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      <Sidebar className={`${toggle ? "open" : ""}`}>
        <div className="close">
          <RxCross2
            size={20}
            cursor={"pointer"}
            onClick={() => setToggle(false)}
          />
        </div>
        <ul className="nav-link">
          <li onClick={() => setToggle(false)}>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li onClick={() => setToggle(false)}>
            <NavLink to={"/about"}>About</NavLink>
          </li>

          <li className={"megamenu-link"} onClick={() => setToggle(false)}>
            <NavLink to={"/practice"} className={"megamenu-link"}>
              PROFICIENCY
            </NavLink>
          </li>
          <li onClick={() => setToggle(false)}>
            <NavLink to={"/key-contacts"}>KEY CONTACTS</NavLink>
          </li>
          <li onClick={() => setToggle(false)}>
            <NavLink to={"/career"} className={"megamenu-link"}>
              careers
            </NavLink>
          </li>
          <li onClick={() => setToggle(false)}>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </Sidebar>
    </>
  );
};
const Wrapper = styled.nav`
  background-color: #022444;
  position: relative;
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    transition: all 0.4s ease;
    z-index: 9;
    background: #fff;
    color: black;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .nav-content {
    height: 100%;
    width: 100%;
  }
  .container {
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    height: 100%;
  }
  .logo a {
    font-weight: 400;
    font-size: 35px;
    color: #00204c;
    text-decoration: none;
    border-bottom: 2px solid #00204c;
    font-family: "Playfair Display", serif;
    span {
      text-transform: uppercase;
      font-size: 25px;
      font-family: "Playfair Display", serif;
    }
  }

  .nav-link {
    display: flex;
    height: 100%;
  }
  .nav-link li {
    list-style: none;
    margin: 0 8px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .megamenu {
    position: absolute;
    width: max-content;
    height: 100px;
    top: -100px;
    overflow: hidden;
    left: -30px;
    right: 0;
    background-color: #efefef;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    overflow: hidden;
    transition: all 0.3s;
    z-index: -12;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 0 20px 10px 20px;

    ul {
      display: flex;
      flex-direction: column;
      li {
        display: flex;
        align-items: start;
        justify-content: start;
        a {
          color: #00204c;
        }
        a:hover {
          transform: translateX(5px);
        }
      }
    }
    &.open {
      transition: all 0.3s;
      top: 50px;
    }
  }
  .megamenu-link {
    position: relative;
  }
  .megamenu-link:hover .megamenu {
    transition: all 0.3s;
    top: 60px;
  }
  .nav-link li a {
    text-decoration: none;
    color: #00204c;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
    padding: 10px 4px;
    transition: all 0.3s ease;
    &:hover {
      color: var(--primary-color);
      transition: all 0.2s ease;
    }
    &.active {
      color: var(--primary-color);
    }
  }

  .btn {
    display: flex;
    align-items: center;
    gap: 20px;
    button {
      border-radius: 3px;
    }
  }
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    display: none;
  }
  @media only screen and (max-width: 1272px) {
    .nav-link {
      display: none;
    }
    .menu {
      display: flex;
    }
  }
  @media only screen and (max-width: 600px) {
    .btn {
      button {
        display: none;
      }
    }
    .logo a {
      font-weight: 400;
      font-size: 25px;
      color: var(--title-color);
      font-family: var(--title-font);
      text-decoration: none;
      border-bottom: 1px solid var(--title-color);
      font-family: var(--title-font);
      span {
        text-transform: capitalize;
        font-size: 18px;
      }
    }
  }
`;

const Sidebar = styled.aside`
  position: fixed;
  height: 100%;
  background-color: #fff;
  width: 300px;
  top: 0;
  right: -300px;
  z-index: 12;
  display: none;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow:
    rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  padding: 10px;
  transition: all 0.5s;
  &.open {
    transition: all 0.5s;
    right: 0;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
    .megamenu-link {
      .megamenu {
        margin-left: 20px;
        width: max-content;
        height: 0;

        overflow: hidden;
        transition: all 0.3s;
        hr {
          display: none;
        }
      }
      li {
        a {
          padding: 0;
          &:hover {
            color: var(--primary-color);
            transition: all 0.2s ease;
          }
          &.active {
            color: var(--primary-color);
          }
        }
      }
      &:hover .megamenu {
        transition: all 0.3s;
        margin-top: 20px;
        height: 60px;
      }
    }

    li {
      a {
        text-decoration: none;
        color: #333;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 500;
        padding: 10px 4px;
        transition: all 0.3s ease;
        &:hover {
          color: var(--primary-color);
          transition: all 0.2s ease;
        }
        &.active {
          color: var(--primary-color);
        }
      }
    }
  }
`;
export default Header;
