import React from "react";
import icon1 from "../assets/images/icon-supervisor.svg";
import icon2 from "../assets/images/icon-team-builder.svg";
import icon3 from "../assets/images/icon-karma.svg";
import icon4 from "../assets/images/icon-calculator.svg";
import Card from "./Card";

const Cards = () => {
  return (
    <section className="master">
      <article className="titles">
        <p className="title1">Reliable, efficient delivery</p>
        <p className="title2">Powered by Technology</p>
        <p className="description">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </article>
      <article className="cards">
        <div className="column1">
          <Card
            category="Supervisor"
            overview="Monitors activity to identify project roadblocks"
            icon={icon1}
          />
        </div>
        <div className="column2">
          <Card
            category="Team Builder"
            overview="Scans our talent network to create the optimal team for your project"
            icon={icon2}
          />
          <Card
            category="Karma"
            overview="Regularly evaluates our talent to ensure quality"
            icon={icon3}
          />
        </div>
        <div className="column3">
          <Card
            category="Calculator"
            overview="Uses data from past projects to provide better delivery estimates"
            icon={icon4}
          />
        </div>
      </article>
    </section>
  );
};

export default Cards;
