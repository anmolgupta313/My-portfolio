"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import "../Nav/Nav.css";
import Link from "next/link";
import { X, hamburger, instagram, linkedIn, git } from "../../../public";

function Nav() {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);
  const [windowDimenssion, detectW] = useState({
    minWidth: window.innerWidth,
  });

  const [menuToggle, setMenuToggel] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <>
      {" "}
      {windowDimenssion.minWidth > 640 ? (
        <div className="nav-main-div">
          <div className="Logo-div">
            <Link href="/" className="logo-link">
              <p>
                Anmol <br /> <mark className="logo mark">Gupta</mark>
              </p>
            </Link>
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
                Projects
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
            <div className="social-icon-sub-div">
              <div className="social-icon">
                <Link href="https://github.com/anmolgupta313" target="#">
                  {" "}
                  <Image className="social-svg" src={git} alt="github-icon" />
                </Link>
              </div>
              <div className="social-icon">
                <Link
                  href="https://www.instagram.com/anmolgupta313/"
                  target="#"
                >
                  <Image
                    className="social-svg"
                    src={instagram}
                    alt="instagram icon"
                  />
                </Link>
              </div>
              <div className="social-icon">
                <Link
                  href="https://www.linkedin.com/in/anmol-gupta-5bab4718b/"
                  target="#"
                >
                  {" "}
                  <Image
                    className="social-svg"
                    src={linkedIn}
                    alt="linked Icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : menuToggle == false ? (
        <div
          onClick={mToggel}
          className={scrolling ? "mb-menu-ham-scroll" : "mb-menu-ham"}
        >
          {" "}
          <div className="logo-nav-outer">
            <Link href="/">
              <p>
                Anmol <mark className="mark">Gupta</mark>
              </p>
            </Link>
          </div>
          <div className="hamburger-icon">
            <Image
              className="hamburger-img"
              src={hamburger}
              alt="3 horizontal line in a single column"
            />
          </div>
        </div>
      ) : (
        <div className="main-nav-bar-links-div">
          <div className="logo-mobile-div">
            <div className="logo-nav">
              <Link href="/">
                <p>
                  Anmol <mark className="mark">Gupta</mark>
                </p>
              </Link>
            </div>

            <div onClick={mToggel} className="x-div-main">
              <Image className="closing-toggle-x" src={X} alt="x" />
            </div>
          </div>

          <ul className="mb-link">
            <li>
              <Link
                className={activeSection === "home" ? "activeStyleNavLink" : ""}
                href="#home"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className={
                  activeSection === "about" ? "activeStyleNavLink" : ""
                }
                href="#about"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className={
                  activeSection === "portfolio" ? "activeStyleNavLink" : ""
                }
                href="#portfolio"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                className={
                  activeSection === "experience" ? "activeStyleNavLink" : ""
                }
                href="#experience"
              >
                Experience
              </Link>
            </li>

            <li>
              <Link
                className={
                  activeSection === "contact" ? "activeStyleNavLink" : ""
                }
                href="#contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="social-icon-sub-div">
            <div className="social-icon">
              <Link href="https://github.com/anmolgupta313" target="#">
                {" "}
                <Image className="social-svg" src={git} alt="github icon" />
              </Link>
            </div>
            <div className="social-icon">
              <Link href="https://www.instagram.com/anmolgupta313/" target="#">
                <Image
                  className="social-svg"
                  src={instagram}
                  alt="instagram icon"
                />
              </Link>
            </div>
            <div className="social-icon">
              <Link
                href="https://www.linkedin.com/in/anmol-gupta-5bab4718b/"
                target="#"
              >
                {" "}
                <Image
                  className="social-svg"
                  src={linkedIn}
                  alt="linked Incon"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
