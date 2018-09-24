// my-travels/src/Travel.js

import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={destination} />
    <figcaption>
        <p>Visit {destination}, {country} !</p>
        <p>Your dream destination is only {distance} away !</p>
    </figcaption>
  </figure>
);

export default Travel;