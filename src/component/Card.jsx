import React from "react";

const Card = ({ category, overview, icon }) => {
  const text = "icon-" + category.replace(/\s+/g, "").toLowerCase();
  console.log(text);
  return (
    <figure className={text}>
      <figcaption className="info">
        <h2 className="category">{category}</h2>
        <p className="overview">{overview}</p>
      </figcaption>
      <picture className="icon">
        <img src={icon} alt={text} />
      </picture>
    </figure>
  );
};

export default Card;
