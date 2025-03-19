import React from "react";
import dev from "../../../../public/dev.png";
import dev1 from "../../../../public/dev1.gif";
import Image from "next/image";
import StarsCanvas from "@/Components/Stars/Stars";
import "../Home/home.css";
function HomePage() {
  return (
    <div className="home-div-main" data-section id="home">
      <div className="home-div">
        <div className="main-heading-div">
          <p>Hi,</p>
          <p className="name">I'm Anmol,</p>
          <p>frontend developer</p>
        </div>
        <div>
          <p className="intro">
            I like to craft solid and scalable frontend products with great user
            experiences.
          </p>
        </div>

        <div className="button-div">
          <button className="about-btn">About Me</button>
          <button className="resume-btn">Resume</button>
        </div>


        <StarsCanvas />
      </div>
      <div className="circle">
        <Image src={dev} />
      </div>
    </div>
  );
}

export default HomePage;
