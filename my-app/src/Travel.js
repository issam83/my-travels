import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={photo} />
    <figcaption>
      <p>{destination}</p>
      <p>{country}</p>
      <p>{distance}</p>
    </figcaption>
  </figure>
);

export default Travel;