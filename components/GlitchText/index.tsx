import React, { useState, useEffect, useRef } from "react";

type GlitchTextProps = {
  text: string;
};

const GlitchText = ({ text }: GlitchTextProps) => {
  const junk = [
    "#",
    "@",
    "%",
    "*",
    "&",
    "<",
    ">",
    "_",
    "=",
    "+",
    "[",
    "]",
    "|",
    "-",
    "!",
    "?",
    "X",
    "~",
    "^",
    "(",
    ")",
    "{",
    "}",
    ";",
    ":",
    ",",
    ".",
    "/",
  ];

  const [glitchedText, setGlitchedText] = useState("");
  const [stopEffect, setStopEffect] = useState(false);
  const timeoutRef = useRef<number>();

  function randomInt(minInclusive: number, maxExclusive: number): number {
    return Math.floor(Math.random() * (maxExclusive - minInclusive));
  }

  useEffect(() => {
    randomizeText();

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const randomizeText = () => {
    if (stopEffect) return;

    const chars = text.split("");
    let index = 0;

    const updateText = () => {
      chars[index] = junk[randomInt(0, junk.length)];
      setGlitchedText(chars.join(""));

      index += 1;

      if (index < text.length) {
        // Calculate the delay based on the length of the text
        const delay = 500 / text.length;
        timeoutRef.current = window.setTimeout(updateText, delay);
      } else {
        // Additional delay before restoring the original text
        timeoutRef.current = window.setTimeout(() => {
          restoreOriginalText();
        }, randomInt(100, 200));
      }
    };

    const restoreOriginalText = () => {
      let restoreIndex = 0;

      const restoreUpdate = () => {
        chars[restoreIndex] = text[restoreIndex];
        setGlitchedText(chars.join(""));

        restoreIndex += 1;

        if (restoreIndex < text.length) {
          // Calculate the delay based on the length of the text
          const delay = 500 / text.length;
          timeoutRef.current = window.setTimeout(restoreUpdate, delay);
        } else {
          // Check if the glitched text is equal to the original text
          if (chars.join("") === text) {
            setStopEffect(true);
          } else {
            // Additional delay before next glitch
            timeoutRef.current = window.setTimeout(() => {
              randomizeText();
            }, randomInt(100, 200));
          }
        }
      };

      restoreUpdate();
    };

    updateText();
  };

  return <span>{glitchedText}</span>;
};

export default GlitchText;
