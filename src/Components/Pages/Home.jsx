import React from "react";
import dev from "../../../public/dev.png";
import dev1 from "../../../public/dev1.gif";
import StarsCanvas from "../Stars/Stars";
import Image from "next/image";

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

        {/* <div className="home-inner-content-bottom">
          <div>
            <p>
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </p>
          </div>
          <div>
            <p>
              Proven experience building successful products for clients across
              several countries.
            </p>
          </div>
        </div> */}

        <StarsCanvas />
      </div>
      <div className="circle">
        <Image src={dev} />
      </div>
    </div>
  );
}

export default HomePage;
