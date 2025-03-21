import React from "react";
import Image from "next/image";
import {dev1} from "../../../../public";
import "../About/about.css"
function About() {
  return (
    <div className="about-main-div">
      <div data-section id="about" className="about-div">
        <div className="avatar-div">
          <Image  src={dev1} alt="animated version of a guy with a laptop typing code" />
        </div>
        <div className="intro-div">
          <h2>
            My <mark className="mark">Intro</mark> 
          </h2>
          <p className="aboutme-Summary">
            My name is Anmol Gupta. I am a commerce graduate and I have always
            been passionate about creating and designing things from scratch.
            Taking this passion forward, I decided to learn web designing and
            development and started working as a freelancer in 2020.{" "}
          </p>

          <p className="aboutme-Summary">
            {" "}
            I have worked as a website designer & developer with companies all
            over the world like Clickworthy, Canada; Nomads Skillshare, Bali and
            Blue Ocean business club, Germany. I worked with their technical
            teams and project managers to understand their customer journeys and
            developed wireframes and front end websites to provide them with
            smooth user experience. These websites helped to increase footfall
            and revenue for these companies.
          </p>
          <p className="aboutme-Summary">
            {" "}
            I migrated to Canada in 2022 and completed my graduation in full
            stack web development from University of Toronto, where I learned
            new coding languages and enhanced my web development skills. While
            studying, I worked on various assignments and team projects for
            building customer centric websites using different frameworks and
            languages such as React, Java Script, CSS for the frontend and
            created MongoDB and MySQL data bases using Mongoose and SQL
            libraries .
          </p>
          <p className="aboutme-Summary">
            {" "}
            I look forward to using my skillsets and experience and helping you
            with your web development needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
