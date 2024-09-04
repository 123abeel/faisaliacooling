import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Air Conditioner Repairing ",
          "Washing Machine Repairing  ",
          "Fridge/Refrigerator Repairing ",
          "And all other services regarding to AC, Fridge/refrigerator and Washing Machine",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
