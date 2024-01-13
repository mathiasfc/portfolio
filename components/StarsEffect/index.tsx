import React, { useEffect, useState } from "react";
import { theme } from "@/styles/theme";
import * as s from "./style";

const StarsEffect = () => {
  const colors = [theme.colors.blue, theme.colors.orange, theme.colors.purple];

  const [randomColor, setRandomColor] = useState<string>("");
  const [randomPosition, setRandomPosition] = useState(0);

  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const generateRandomPosition = () => {
    return Math.floor(Math.random() * 601);
  };

  useEffect(() => {
    setRandomColor(generateRandomColor());
    setRandomPosition(generateRandomPosition());

    const intervalId = setInterval(() => {
      setRandomColor(generateRandomColor());
      setRandomPosition(generateRandomPosition());
    }, 10 * 1000);

    return () => clearInterval(intervalId);
  }, []);

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
