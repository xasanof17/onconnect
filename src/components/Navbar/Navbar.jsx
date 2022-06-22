import React, { useState } from "react";
import {
  AiOutlineCaretDown,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { images } from "../../constants";
import "./Navbar.scss";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState(false);
  const showBtn = () => {
    setActive((prevState) => !prevState);
  };
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="header__nav">
      <div className="header__nav-content">
        <a href="/about" className="header__nav-logo">
          <img src={images.logo} alt="logo" className="logo" />
        </a>
        <div className="header__nav-content__user">
          <div className="header__nav-content__user-inner">
            <div className="lang">
              <select className="lang__select" name="lang" id="lang">
                <option value="RU">RU</option>
                <option value="UZ">UZ</option>
              </select>
              <AiOutlineCaretDown />
            </div>
            <a href="/about" className="icon">
              <img src={images.icon1} alt="icon1" />
            </a>
            <a href="/about" className="icon">
              <img src={images.icon2} alt="icon2" />
            </a>
            <a href="/about" className="icon">
              <img src={images.search} alt="search" />
            </a>
          </div>
          <div className="header__nav-content__about">
            <div className="header__nav-content__about-name">
              <h4>Xasanov Javohir</h4>
              <p>Developer</p>
            </div>
            <div className="header__nav-content__about-profile">
              <div className="profile-img">
                <img src={images.admin} alt="admin" />
              </div>
              <button className="down" onClick={() => showBtn()}>
                <img src={images.dropDownUser} alt="" />
              </button>
            </div>
            <div
              className={
                active
                  ? "header__nav-content__about-drop_down active"
                  : "header__nav-content__about-drop_down"
              }
            >
              <ul className="header__nav-content__about-drop_down-list">
                <li className="header__nav-content__about-drop_down-item">
                  <Link to="/contact" className="drop_down-link">
                    My Investiments
                  </Link>
                </li>
                <li className="header__nav-content__about-drop_down-item">
                  <Link to="/about" className="drop_down-link">
                    Edit Profile
                  </Link>
                </li>
                <li className="header__nav-content__about-drop_down-item">
                  <Link to="/contact" className="drop_down-link">
                    Settings
                  </Link>
                </li>
                <li className="header__nav-content__about-drop_down-item">
                  <Link to="/about" className="drop_down-link">
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="smallscreen">
          <AiOutlineMenu onClick={() => setToggle(true)} className='open'/>

          {toggle && (
            <div className="smallscreen_overlay">
              <AiOutlineClose
                className="overlay__close"
                onClick={() => setToggle(false)}
              />
              <ul className="smallscreen_overlay-list">
                <div className="smallscreen_overlay-list_about">
                  <div className="smallscreen_overlay-list_about-name">
                    <h4>Xasanov Javohir</h4>
                    <p>Developer</p>
                  </div>
                  <div className="header__nav-content__about-profile">
                    <div className="profile-img">
                      <img src={images.admin} alt="admin" />
                    </div>
                  </div>
                </div>
                <ul className="smallscreen_overlay-list_profile">
                  <li className="smallscreen_overlay-list_profile-item">
                    <Link to="/contact">My Investiments</Link>
                  </li>
                  <li className="smallscreen_overlay-list_profile-item">
                    <Link to="/about">Edit Profile</Link>
                  </li>
                  <li className="smallscreen_overlay-list_profile-item">
                    <Link to="/contact">Settings</Link>
                  </li>
                  <li className="smallscreen_overlay-list_profile-item">
                    <Link to="/about">Log out</Link>
                  </li>
                </ul>
                <div className="header__nav-content__user-inner">
                  <div className="lang">
                    <select className="lang__select" name="lang" id="lang">
                      <option value="RU">RU</option>
                      <option value="UZ">UZ</option>
                    </select>
                    <AiOutlineCaretDown />
                  </div>
                  <a href="/contact" className="icon">
                    <img src={images.icon1} alt="icon1" />
                  </a>
                  <a href="/contact" className="icon">
                    <img src={images.icon2} alt="icon2" />
                  </a>
                  <a href="/contact" className="icon">
                    <img src={images.search} alt="search" />
                  </a>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
