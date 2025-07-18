import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarLinks from "./NavbarLinks";
import { Link } from "react-router-dom";
function Navbar() {
  const [isNavClicked, setIsNavClicked] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const navbar = document.getElementById("navbar");
      const offset = 100;
      if (window.scrollY > offset) {
        navbar.classList.add(
          "fixed",
          "top-0",
          "left-0",
          "z-50",
          "right-0",
          "py-2"
        );
        navbar.classList.remove("py-6");
      } else {
        navbar.classList.remove(
          "fixed",
          "top-0",
          "left-0",
          "z-50",
          "right-0",
          "py-2"
        );
        navbar.classList.add("py-6", "z-[999]");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="bg-[#2C3E50] py-6" id="navbar">
      <div className="container ">
        <div className="flex items-center justify-between flex-wrap">
          <Link to="">
            <div className="navbar-logo cursor-pointer">START FRAMEWORK</div>
          </Link>

          <div
            className="border px-3.5 py-1.5 rounded-md border-[#29394A] cursor-pointer lg:hidden active:outline-2"
            onClick={() => {
              setIsNavClicked((state) => !state);
            }}
          >
            <FontAwesomeIcon icon="fa-bars" size="xl" color="#242C33" />
          </div>
          <div className="hidden lg:block">
            <NavbarLinks />
          </div>
        </div>
        {isNavClicked && (
          <div className="lg:hidden">
            <NavbarLinks />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
