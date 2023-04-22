import { NavLink } from 'react-router-dom';
import React from 'react';

import {
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaEnvelope,
} from 'react-icons/fa';

const Navbar = () => {
  const styles = {
    className: 'pr-4',
    activeClassName: 'underline pr-4',
  };

  const links = [
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: '/',
      name: 'Home',
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: '/video',
      name: 'Video',
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: '/photo',
      name: 'Photo',
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: '/commercial',
      name: 'Commercial',
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: '/about',
      name: 'About',
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: '/contact',
      name: 'Contact',
    },
  ];

  const socials = [
    {
      component: <FaInstagram />,
      href: 'http://instagram.com/by.taigh',
    },
    {
      component: <FaLinkedinIn />,
      href: 'http://linkedin.com/in/taigh/',
    },
    {
      component: <FaBehance />,
      href: 'http://behance.net/taigh',
    },
    {
      component: <FaEnvelope />,
      href: 'mailto:taighromanczuk@gmail.com',
    },
  ];

  return (
    <nav className="">
      <ul className="flex flex-wrap basis-1/3">
        {links.map((link) => (
          <NavLink
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
            className="max-h-12 w-min"
            src="https://images.squarespace-cdn.com/content/v1/5e7b455293633531355748f4/1591979317562-G3LZR0G2TQC7E0LRXDMU/Logo_temp.png?format=1500w"
            alt=""
          />
        </a>
      </div>

      <ul className="flex justify-end basis-1/3">
        {socials.map((social) => (
          <a className="nav-icons" href={social.href}>
            {social.component}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
