"use client";

import React, { useState, useEffect, useRef } from "react";
import logo from "../../../public/logo.jpg";
import Image from "next/image";
import github from "../../../public/github.png";
import instagram from "../../../public/instagram.png";
import linkedIn from "../../../public/linkedin.png";
import "../Nav/Nav.css";
import Link from "next/link";
import X from "../../../public/x.png";
import hamburger from "../../../public/hamburger.png";
function Nav() {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);
  const [windowDimenssion, detectW] = useState({
    minWidth: window.innerWidth,
  });

  const [menuToggle, setMenuToggel] = useState(false);

  useEffect(() => {
    //create new instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      //Update state with the visible section ID
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });

    //Get custom attribute data-section from all sections
    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  const detectSize = () => {
    detectW({
      minWidth: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenssion.minWidth]);

  function mToggel() {
    setMenuToggel((prev) => {
      return !prev;
    });
  }

  return (
    <>
      {" "}
      {windowDimenssion.minWidth > 640 ? (
        <div className="nav-main-div">
          <div className="Logo-div">
            <Image className="Logo" src={logo} />
          </div>
          <div className="nav-link-div">
            <div>
              <Link
                href="#home"
                className={activeSection === "home" ? "activeStyleNavLink" : ""}
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                href="#about"
                className={
                  activeSection === "about" ? "activeStyleNavLink" : ""
                }
              >
                About
              </Link>
            </div>
            <div>
              <Link
                href="#experience"
                className={
                  activeSection === "experience" ? "activeStyleNavLink" : ""
                }
              >
                Experience
              </Link>
            </div>
            <div>
              <Link
                href="#portfolio"
                className={
                  activeSection === "portfolio" ? "activeStyleNavLink" : ""
                }
              >
                Portfolio
              </Link>
            </div>

            <div>
              <Link
                href="#contact"
                className={
                  activeSection === "contact" ? "activeStyleNavLink" : ""
                }
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="social-icon-div">
            <div className="social-icon">
              <Image className="social-svg" src={github} />
            </div>
            <div className="social-icon">
              <Image className="social-svg" src={instagram} />
            </div>
            <div className="social-icon">
              <Image className="social-svg" src={linkedIn} />
            </div>
          </div>
        </div>
      ) : menuToggle == false ? (
        <div onClick={mToggel}>
          <img className="hamburger-img" src={hamburger} alt="" />
        </div>
      ) : (
        <div className="main-nav-bar-links-div">
          <div className="logo-mobile-div">
            <div className="logo-nav">
              <a href="/">
                <p>
                  Anmol <mark className="mark">Gupta</mark>
                </p>
              </a>
            </div>

            <div onClick={mToggel} className="x-div-main">
              <img className="closing-toggle-x" src={X} alt="" />
            </div>
          </div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/About">About</Link>
            </li>

            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>

            <li>
              <Link to="/Resume">Resume</Link>
            </li>

            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Nav;
