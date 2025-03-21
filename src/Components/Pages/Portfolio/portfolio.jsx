import React from "react";

import Image from "next/image";
import "../Portfolio/portfolio.css";
import { portfolio } from "@/Constants";
function Portfolio() {
  const pop = portfolio.map((activity) => {
    return (
      <div className="card-div" key={activity.title}>
        <div className="img-portfolio">
          <Image src={activity.image} alt="project-img" />
        </div>
        <div className="content-div">
          <div className="title">
            <h3>{activity.title}</h3>
          </div>

          <div className="des-link-div">
            <div className="description">
              <p>{activity.description}</p>
            </div>
            <div className="links">
              <div>
                <a href={activity.github.link}>
                  <Image
                    className="iconss"
                    src={activity.github.icon}
                    alt="cat icon"
                  />
                </a>
              </div>
              <div>
                <a href={activity.deployedLink.link}>
                  <Image
                    className="iconss"
                    src={activity.deployedLink.icon}
                    alt="web icon` "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="portfolio-main-div">
      <div data-section id="portfolio" className="portfolio-heading-div">
        <h1>
          MY <mark className="mark">PORTFOLIO</mark>
        </h1>
      </div>
      <div className="cards-main-div">{pop}</div>
    </div>
  );
}

export default Portfolio;
