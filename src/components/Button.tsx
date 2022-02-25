import React, { SyntheticEvent } from "react";

const Button = ({
  color,
  text,
  onClick,
}: {
  color: string;
  text: string;
  onClick: (ev: SyntheticEvent) => void;
}) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

export default Button;
