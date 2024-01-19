import React, { useEffect, useState } from "react";
import { theme } from "@/styles/theme";
import * as s from "./style";

/**
 * The `StarsEffect` component adds a decorative stars effect to the page.
 * It generates moving stars and a small planet with a random color and position.
 */
const StarsEffect = () => {
  // Array of colors for the stars and the small planet
  const colors = [theme.colors.blue, theme.colors.orange, theme.colors.purple];

  // State variables to hold the random color and position
  const [randomColor, setRandomColor] = useState<string>("");
  const [randomPosition, setRandomPosition] = useState(0);

  // Function to generate a random color from the predefined colors
  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  // Function to generate a random position for the small planet
  const generateRandomPosition = () => {
    return Math.floor(Math.random() * 601);
  };

  // Effect to set the initial random color and position, and update them at intervals
  useEffect(() => {
    setRandomColor(generateRandomColor());
    setRandomPosition(generateRandomPosition());

    const intervalId = setInterval(() => {
      setRandomColor(generateRandomColor());
      setRandomPosition(generateRandomPosition());
    }, 10 * 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  // Render the stars effect with moving stars and a small planet
  return (
    <s.StarsEffectContainer>
      <s.MovingStars />
      <s.MovingStars />
      <s.MovingStars />
      <s.MovingStars />
      <s.MovingStars />
      <s.MovingStars />
      <s.SmallPlanet
        $randomPosition={`${randomPosition}px`}
        $randomColor={randomColor}
      />
    </s.StarsEffectContainer>
  );
};

export default StarsEffect;
