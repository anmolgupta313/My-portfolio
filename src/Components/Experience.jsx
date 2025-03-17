"use client";
const { experience } = require("@/Constants");

import React, { useState } from "react";

function Experience() {
  const [activeArcc, setActiveArcc] = useState(false);
  const [id, setId] = useState("");

  function arrcordianDown(e) {
    setId(e.target.id);
    setActiveArcc((active) => {
      return !active;
    });

    console.log("hello");
  }
  return (
    <div>
      <div data-section id="experience" className="downlaod-div">
        <h1>
          My <mark className="mark">Journey</mark>
        </h1>
      </div>
      <div className="experience-sub-div">
        {experience.map((item) => (
          <div>
            <div
              key={item.id}
              className="flex items-center justify-start  p-4 border-b-2 border-slate-300"
            >
              <p className="text-left w-[250px]">{item.year}</p>
              <div className="w-full flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:items-center">
                <h3 className="text-lg text-left">{item.title}</h3>
                <p className="text-sm">{item.company}</p>
              </div>

              <div>
                <button onClick={arrcordianDown} id={item.id} className="px-4">
                  {" "}
                  Arrow
                </button>
              </div>
            </div>

            <div>
              {id == item.id && activeArcc && (
                <div>
                  <ul className=" flex flex-col gap-y-[1.2rem] py-10 px-4 ">
                    <li>{item.description.p1}</li>
                    <li>{item.description.p2}</li>
                    <li>{item.description.p3}</li>
                    <li>{item.description.p4}</li>
                    <li>{item.description.p5}</li>
                    <li>{item.description.p6}</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
