import { NavLink } from "react-router-dom";
import React, { useRef, useState } from "react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const styles = {
    className: "hover:underline",
    activeClassName: "underline",
  };

  const links = [
    {
      id: 1,
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: "/",
      name: "Home",
    },
    {
      id: 2,
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: "/video",
      name: "Video",
    },
    {
      id: 3,
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: "/photo",
      name: "Photo",
    },
    {
      id: 4,
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: "/commercial",
      name: "Commercial",
    },
    {
      id: 5,
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: "/about",
      name: "About",
    },
    {
      id: 6,
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: "/contact",
      name: "Contact",
    },
  ];

  const socials = [
    {
      id: 1,
      component: <FaInstagram />,
      href: "http://instagram.com/by.taigh",
    },
    {
      id: 2,
      component: <FaLinkedinIn />,
      href: "http://linkedin.com/in/taigh/",
    },
    {
      id: 3,
      component: <FaBehance />,
      href: "http://behance.net/taigh",
    },
    {
      id: 4,
      component: <FaEnvelope />,
      href: "mailto:taighromanczuk@gmail.com",
    },
  ];

  return (
    <nav className="sticky left-0 top-0 z-50 flex w-full flex-nowrap items-center justify-between bg-white p-4">
      <div
        className={
          navBarOpen
            ? "fixed left-0 top-0 h-screen w-full basis-1/3 justify-center bg-white align-middle md:static md:h-auto"
            : "fixed hidden h-screen w-full basis-1/3  bg-white md:static md:flex md:h-auto"
        }
      >
        <ul
          className={
            navBarOpen
              ? "flex h-full w-full flex-col justify-center text-center align-middle md:flex md:h-auto md:flex-row md:flex-wrap md:gap-4"
              : "flex h-full w-full flex-col  text-center align-middle md:flex md:h-auto md:flex-row md:flex-wrap md:gap-4"
          }
        >
          {links.map((link) => (
            <NavLink
              key={link.id}
              className={({ isActive }) =>
                isActive ? link.activeClassName : link.className
              }
              to={link.to}
              onClick={() => setNavBarOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="">
        <a href="/" className="align-top">
          <img
            className="max-h-14"
            src={
              new URL("/src/Resources/assets/Watermark.png", import.meta.url)
                .href
            }
            alt=""
          />
        </a>
      </div>

      <ul className="hidden shrink  md:flex md:basis-1/3 md:justify-end md:gap-10">
        {socials.map((social) => (
          <a key={social.id} className="text-xl" href={social.href}>
            {social.component}
          </a>
        ))}
      </ul>

      <button
        data-collapse-toggle="navbar-hamburger"
        type="button"
        className="ml-3 inline-flex  rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        aria-controls="navbar-hamburger"
        aria-expanded="false"
        onClick={() => setNavBarOpen((prev) => !prev)}
      >
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
