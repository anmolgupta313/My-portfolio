"use client";

import { skills } from "@/Constants";
import Image from "next/image";
import React, { useState } from "react";
import Experience from "./Experience";
import "../Experience/resume.css";
function Resume() {
  const [id, setId] = useState("");

  function onHover(e) {
    setId(e.target.id);
  }

  function onLeave() {
    setId("");
  }

  return (
    <div data-section id="experience" className="resume-main-div">
      <div>
        <div className="downlaod-div">
          <h1>
            My Programming <mark className="mark">Skills</mark>
          </h1>
        </div>
        <div className="skills-div">
          {skills.map((skill) => {
            return (
              <div key={skill.id} className="relative">
                <div>
                  <Image
                    data-section
                    id={skill.id}
                    onMouseLeave={onLeave}
                    onMouseOver={onHover}
                    src={skill.icon}
                    alt={skill.title}
                    className=" image-skill h-[80px] w-auto m-8 grayscale hover:grayscale-0"
                  />
                </div>

                <div className="relative text-center">
                  {skill.id == id && (
                    <p
                      className={` skill-text ${
                        id ? "fade-in" : "fade-out"
                      } text-[#3ba0a4] text-center font-[600] capitalize `}
                    >
                      {skill.id}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="experience-div">
        <Experience />
      </div>
    </div>
  );
}

export default Resume;
