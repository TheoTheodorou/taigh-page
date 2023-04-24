import { NavLink } from "react-router-dom";
import React from "react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const styles = {
    className: "",
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
      <ul className="hidden basis-1/3 md:flex md:flex-wrap md:gap-4">
        {links.map((link) => (
          <NavLink
            key={link.id}
            className={({ isActive }) =>
              isActive ? link.activeClassName : link.className
            }
            to={link.to}
          >
            {link.name}
          </NavLink>
        ))}
      </ul>

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

      <div className="md:hidden">O</div>
    </nav>
  );
};

export default Navbar;
