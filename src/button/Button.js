import React from "react";
import "./Button.scss";

const Button = ({
  text,
  size = "n",
  classesName,
  clickEvent = undefined,
  disabled = false,
  loading,
}) => {
  let classes = "btn";
  if (loading) {
    classes += " btn-loading";
  }
  if (disabled) {
    classes = "btn btn-disabled";
  }

  return (
    //  this should be changed soon after finishing the Proejct creation

    <button
      type="submit"
      onClick={(e) => {
        if (!disabled && clickEvent) {
          clickEvent(e);
        }
        e.preventDefault();
      }}
      className={`${classes} ${size}-btn ${classesName}`}
    >
      {text}

      <span className="buttonLoader"></span>
    </button>
  );
};

export default Button;
