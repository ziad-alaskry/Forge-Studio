"use client";

import { useEffect, useState } from "react";

interface EncryptedTextProps {
  text: string;
  encryptedClassName?: string;
  revealedClassName?: string;
  revealDelayMs?: number;
}

export function EncryptedText({
  text,
  encryptedClassName = "",
  revealedClassName = "",
  revealDelayMs = 50,
}: EncryptedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    let i = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) =>
            index < i
              ? char
              : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      );

      i++;

      if (i > text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setRevealed(true);
      }
    }, revealDelayMs);

    return () => clearInterval(interval);
  }, [text, revealDelayMs]);

  return (
    <span className={revealed ? revealedClassName : encryptedClassName}>
      {displayText}
    </span>
  );
}
