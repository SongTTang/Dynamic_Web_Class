import React from "react";
import cx from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  className,
  ...rest
}) => {
  const classes = cx(
    "flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-150",
    className,
    {
      // filled
      "bg-primary text-bg hover:bg-primary-dark": primary && !outline,
      "bg-card text-text hover:bg-card-dark": secondary && !outline,
      "bg-green-500 text-white hover:bg-green-600": success && !outline,
      "bg-yellow-500 text-white hover:bg-yellow-600": warning && !outline,
      "bg-red-500 text-white hover:bg-red-600": danger && !outline,

      // outline
      "border border-border bg-bg text-text hover:bg-card": outline && !primary && !secondary,

      "border border-primary text-primary bg-bg hover:bg-primary-dark":
        outline && primary,

      "border border-border text-text bg-bg hover:bg-card-dark":
        outline && secondary,

      // rounded
      "rounded-full": rounded,
      "rounded": !rounded,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
