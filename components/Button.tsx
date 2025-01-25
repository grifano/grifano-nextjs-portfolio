import React from "react";

const Button = ({ url, label }) => {
  return (
    <a
      href={url}
      className="text-base font-bold uppercase leading-[1.6] tracking-[0.14em]"
    >
      {label}
    </a>
  );
};

export default Button;
