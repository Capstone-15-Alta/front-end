import React from "react";

const Button = ({ title, color, background, type, className, onClick }) => {
  return (
    <button
      type={type}
      className={className}
      style={{ backgroundColor: background, color: color }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
