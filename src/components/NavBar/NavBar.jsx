import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";
const navItems = [
  { id: "nav-001", name: "Home", path: "/" },
  { id: "nav-002", name: "About", path: "/about" },
  { id: "nav-003", name: "Services", path: "/services" },
  { id: "nav-005", name: "Contact", path: "/contact" },
];
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const links = navItems.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <nav className="flex justify-between items-center px-2 py-2 shadow-sm">
      <span className="flex items-center gap-2" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}

        <ul
          className={`md:hidden absolute z-1 duration-300 bg-base-200 rounded-box shadow w-40 p-2
        ${open ? "top-12" : "-top-40"}`}
        >
          {links}
        </ul>
        <h3 className="btn btn-ghost px-0 text-xl">My NavBar</h3>
      </span>
      <ul className="hidden md:flex md:gap-10">{links}</ul>
      <button className="btn">Sign In</button>
    </nav>
  );
};

export default NavBar;
