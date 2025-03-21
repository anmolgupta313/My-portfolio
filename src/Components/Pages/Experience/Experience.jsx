"use client";
const { experience } = require("@/Constants");
import { arrowDown, arrowUp } from "../../../../public";
import Image from "next/image";
import React, { useState } from "react";

function Experience() {
  const [activeId, setActiveId] = useState(null);

  function arrcordianDown(e) {
    const clickedId = e.target.id;
    setActiveId((prevId) => (prevId === clickedId ? null : clickedId));
  }
  return (
    <div>
      <div className="downlaod-div">
        <h1>
          My <mark className="mark">Journey</mark>
        </h1>
      </div>
      <div className="experience-sub-div">
        {experience.map((item) => (
          <div key={item.id}>
            <div
              key={item.id}
              className="flex items-center justify-start  p-4 border-b-2 border-slate-300"
            >
              <p className="text-left w-[250px]">{item.year}</p>
              <div className="w-full flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:items-center">
                <h3 className="text-lg text-left">{item.title}</h3>
                <p className="text-sm">{item.company}</p>
              </div>

              <div className="arrow-div">
                {" "}
                <Image
                  onClick={arrcordianDown}
                  id={item.id}
                  className="arrow p-2"
                  src={activeId == item.id ? arrowUp : arrowDown}
                  alt="sort-down-up"
                />
              </div>
            </div>

            <div>
              {activeId == item.id && (
                <div>
                  <ul className=" flex flex-col gap-y-[1.2rem] py-10 px-4 ">
                    <li>{item.description?.p1}</li>
                    <li>{item.description?.p2}</li>
                    <li>{item.description?.p3}</li>
                    <li>{item.description?.p4}</li>
                    <li>{item.description?.p5}</li>
                    <li>{item.description?.p6}</li>
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
