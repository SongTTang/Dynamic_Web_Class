import React from "react";

const LoggingDot = ({ colors = [], count = 0, size = 45 }) => {
  if (count === 0) return null;

  let background = "";

  if (count === 1) {
    background = colors[0];
  }

  else if (count === 2) {
    background = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
  }

  else {
    background = colors
      .map(
        (c, i) =>
          `radial-gradient(circle, ${c} ${
            20 + i * 20
          }%, transparent ${40 + i * 20}%)`
      )
      .join(", ");
  }

  return (
    <div
      className="rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        width: size,
        height: size,
        background,
      }}
    ></div>
  );
};

export default LoggingDot
