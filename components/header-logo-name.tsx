"use client";
import { Icon } from "@chakra-ui/react";

export default function HeaderLogo() {
  return (
    <Icon
      viewBox="0 10 390 10"
      boxSize="150px"
      xmlns="http://www.w3.org/2000/svg"
      height="50px"
    >
      <style>
        {`
          @keyframes colorToggle1 {
            0%, 50% { fill: #2eca7f; }
            100% { fill: #002147; }
          }

          @keyframes colorToggle2 {
            0%, 50% { fill: #002147; }
            100% { fill: #2eca7f; }
          }
        `}
      </style>
      <text x="5" y="40" fontSize="65">
        <tspan
          className="git"
          style={{ animation: "colorToggle1 3s infinite" }}
        >
          Git{" "}
        </tspan>
        <tspan
          className="connect"
          style={{ animation: "colorToggle2 3s infinite" }}
        >
          Connect
        </tspan>
      </text>
    </Icon>
  );
}
