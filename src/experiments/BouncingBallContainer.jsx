import React, { useState } from "react";
import BouncingBallOne from "./BouncingBallOne.jsx";
import BouncingBallTwo from "./BouncingBallTwo.jsx";
import BouncingBallThree from "./BouncingBallThree.jsx";
import Graphic from "../components/Graphic.jsx";
import RadioButton from "../components/RadioButton.jsx";
import RadioButtonGroup from "../components/RadioButtonGroup.jsx";
import style from "./BouncingBallContainer.module.css";

const BouncingBallContainer = () => {
  const [frame, setFrame] = useState("one");

  const handleRadioChange = (e) => {
    setFrame(e.target.value);
  };

  const data = {
    one: {
      description: "This example uses CSS Keyframes to animate the ball",
      component: <BouncingBallOne />,
    },
    two: {
      description:
        "Here, I'm using GSAP to scale the circle's X and Y dimensions to simulate how balls deform when colliding with the floor.",
      component: <BouncingBallTwo />,
    },
    three: {
      description: "With a shadow and shading",
      component: <BouncingBallThree />,
    },
  };

  return (
    <div className={style.container}>
      <RadioButtonGroup>
        <RadioButton
          name="radioOne"
          value="one"
          checked={frame === "one"}
          onChange={handleRadioChange}
        />
        <RadioButton
          name="radioTwo"
          value="two"
          checked={frame === "two"}
          onChange={handleRadioChange}
        />
        <RadioButton
          name="radioThree"
          value="three"
          checked={frame === "three"}
          onChange={handleRadioChange}
        />
      </RadioButtonGroup>
      <p>
        {frame === "one" && data.one.description}
        {frame === "two" && data.two.description}
        {frame === "three" && data.three.description}
      </p>
      <Graphic>
        {frame === "one" && data.one.component}
        {frame === "two" && data.two.component}
        {frame === "three" && data.three.component}
      </Graphic>
    </div>
  );
};

export default BouncingBallContainer;
