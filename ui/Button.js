import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  className,
  margin,  // New prop for margin
}) => {
  const baseStyles =
    "focus:outline-none focus:ring-none transition duration-200 bg-gradient-to-r from-light-royal-blue from-0% via-purple-heart via-54% to-amaranth to-100% text-white text-lg font-medium rounded-full text-center py-4 px-6 hover:bg-custom-dark transform";

  // Manually construct the class string
  let buttonClasses = baseStyles;

  if (disabled) {
    buttonClasses += " opacity-50 cursor-not-allowed";
  }

  if (className) {
    buttonClasses += ` ${className}`;
  }

  if (margin) {
    buttonClasses += ` ${margin}`;
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// Prop type validation
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  margin: PropTypes.string, // Adding margin as an optional prop type
};

export default Button;
