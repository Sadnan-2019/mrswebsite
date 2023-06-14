import React, { useEffect, useState } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
import sun from "../../assets/sunny-day.png";
import moon from "../../assets/moon.png";

const Nav = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
    const active =
    "text-white mx-1 font-medium border-b-2 border-white-900 pb-1 md:text-white-900 ";
  const normal =
    "  mx-1 text-white-600 font-medium font-bold focus:text-white p-0 lg:text-white   ";
  const navItem = (
    <>
      <li className="nav-item p-2 	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/home"
        >
          Home
        </NavLink>
      </li>

      <li className="nav-item p-2 	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/news-media"
        >
          News & Media
        </NavLink>
      </li>
      <li className="nav-item p-2 	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/career"
        >
          Career
        </NavLink>
      </li>
      {/* <li className=" nav-item  p-2   	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/gallery"
        >
          Gallery
        </NavLink>
      </li> */}
      <li className="nav-item p-2 	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/about"
        >
          About us
        </NavLink>
      </li>

      <li className="nav-item p-2 	">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/contact"
        >
          Contacts
        </NavLink>
      </li>
    </>
  );
    return (
        <div className='sticky top-0 z-50'>
        
            <div className="">
      
      <div className="navbar  bg-gradient-to-r from-[#92468E] to-[#38235D]  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className=" btn btn-ghost   text-white  lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl rounded-box  bg-[#123261]  text-white w-52 "
            >
              {navItem}
            </ul>
          </div>
          <div className="flex justify-items-center items-center gap-2 ">
            <p style={{ color: "white" }}>Follow Us</p>
            <a href="">
              <FaFacebookSquare className="text-lg ml-2 text-white" />
            </a>
            <a href="">
              {" "}
              <BsLinkedin className="text-lg ml-2 text-white" />
            </a>
            <a href="">
              <TiSocialTwitter className="text-lg ml-2 text-white" />
            </a>
            <a href="">
              <TiSocialInstagram className="text-lg ml-2 text-white" />
            </a>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="  menu-horizontal p-0">{navItem}</ul>
        </div>
        <div className="flex-none">
        {/* Toggle button here */}
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
            <img src={sun} alt="light" className="w-8 h-8 swap-on" />
            {/* dark theme moon image */}
            <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
      </div>
        {/* <div className="navbar-end">
          <a className="btn">Get started</a>
        </div> */}
      </div>
    </div>
        </div>
    );
};

export default Nav;