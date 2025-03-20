import React from "react";
import dev from "../../../../public/dev.png";

import Image from "next/image";
import StarsCanvas from "@/Components/Stars/Stars";
import "../Home/home.css";
import Link from "next/link";
function HomePage() {
  return (
    <div className="home-div-main" data-section id="home">
      <div className="home-sub-div">
        <div className="home-div">
          <div className="main-heading-div">
            <p>Hi,</p>
            <p className="name">I'm Anmol,</p>
            <p>frontend developer</p>
          </div>
          <div>
            <p className="intro">
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>
          </div>

          <div className="button-div">
            <Link href="#about">
              {" "}
              <button className="about-btn">About Me</button>
            </Link>

            <Link
              href="https://drive.google.com/file/d/18dxfZqcmJJQcsiHyIwbuOMeUubzfhqpx/view?usp=sharing"
              target="#"
            >
              <button className="resume-btn">Resume</button>
            </Link>
          </div>

          <StarsCanvas />
        </div>
        <div className="circle">
          <Image src={dev} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
