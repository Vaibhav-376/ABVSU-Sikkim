"use client";
import { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 120, delay = 700 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    
    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
    } else {
      // Hold for 500ms, then restart
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [index, text, speed, delay]);

  return (
    <div className="text-xs md:text-2xl font-semibold text-[#003262] my-auto" style={{ fontStyle: "normal" }}>
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypingEffect;
