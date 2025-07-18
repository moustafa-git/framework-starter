import { NavLink } from "react-router-dom";
function NavbarLinks() {
  return (
    <ul className="text-white font-medium text-[16px] lg:flex lg:justify-end items-center lg:gap-6 space-y-6 lg:space-y-0">
      <li className="mt-5 lg:mt-0">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? " active px-4 py-2" : "px-4 py-2"
          }
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="portfolio"
          className={({ isActive }) =>
            isActive ? " active px-4 py-2" : "px-4 py-2"
          }
        >
          PORTFOLIO
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? " active px-4 py-2" : "px-4 py-2"
          }
        >
          CONTACT
        </NavLink>
      </li>
    </ul>
  );
}

export default NavbarLinks;
