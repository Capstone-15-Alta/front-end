import React from "react";
import "./button.scss";

const Button = ({
  title,
  color,
  background,
  type,
  className,
  onClick,
  source,
  alt,
  iconClassName,
}) => {
  return (
    <div className="button-component">
      <button
        type={type}
        className={className}
        style={{ backgroundColor: background, color: color }}
        onClick={onClick}
      >
        {title}
      </button>
      <img src={source} alt={alt} className={iconClassName} />
    </div>
  );
};

export default Button;
