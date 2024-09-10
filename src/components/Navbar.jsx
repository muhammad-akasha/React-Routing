import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [changePage, setChangePage] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setChangePage(false); // Reset page change state when toggling
  };

  const changingPage = () => {
    setIsOpen(false); // Close menu when changing pages
    setChangePage(true); // Set page change state
  };
  return (
    <nav className="navbar bg-neutral text-neutral-content p-5">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">React-Router-Dom</a>
      </div>
      <div className="flex-none md:hidden">
        <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-8 font-medium text-[15px]">
          <Link to="">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </ul>
      </div>

      <div
        className={`fixed top-0 left-0 z-10 h-full transition-transform ${
          changePage ? "duration-100" : "duration-300"
        } ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-[-300px]"
        }  md:hidden`}
      >
        <ul className="menu h-full w-[300px] p-6 bg-black text-white gap-3 text-[18px]">
          <Link onClick={changingPage} to="">
            Home
          </Link>
          <Link onClick={changingPage} to="about">
            About
          </Link>
          <Link onClick={changingPage} to="contact">
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
