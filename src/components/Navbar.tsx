import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  useEffect(() => {}, []);
  return (
    <nav className="h-14">
      <ul className="h-full flex flex-row items-center justify-between px-4">
        <li className="h-full flex items-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'border-b-2 border-blue-600' : '')}>
            Refactor React Code
          </NavLink>
        </li>
        <li className="h-full flex items-center">
          <NavLink
            to="/performence"
            className={({ isActive }) => (isActive ? 'border-b-2 border-blue-600' : '')}>
            Performance in React
          </NavLink>
        </li>
        <li className="h-full flex items-center">
          <NavLink
            to="/referentialEquality"
            className={({ isActive }) => (isActive ? 'border-b-2 border-blue-600' : '')}>
            Referential Equality
          </NavLink>
        </li>
        <li className="h-full flex items-center">
          <NavLink
            to="/reduceRendering"
            className={({ isActive }) => (isActive ? 'border-b-2 border-blue-600' : '')}>
            Reduce Component Rerendering
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
