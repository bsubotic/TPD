import T from "i18n-react";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ onClick, className, text }) => {
  return (
    <T.button
      onClick={onClick}
      className={classNames("br0 pointer pa3 w-100 outline-0 bn", className)}
      text={text}
    />
  );
};

Button.propTypes = {
  /** Function that is called when the button is clicked */
  onClick: PropTypes.func.isRequired,
  /** String that is added as a className for the button (for one time overrides) */
  text: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
};

export default Button;
