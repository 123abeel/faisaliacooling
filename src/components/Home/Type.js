import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Air Conditioner Reapiring ",
          "Washing Machine Reparing  ",
          "Fridge/Refrigerator Reapairing ",
          "And all other services regarding to AC, Fridge/refrigerator and Wasing Machine",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
