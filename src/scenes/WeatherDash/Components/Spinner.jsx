import React from "react";
import classnames from "classnames";
import "./Spinner.scss";

export default ({ className }) => (
  <div className={classnames("Spinner min-h-100 relative", className)}>
    <div className="loader">
      <div className="square" />
      <div className="square" />
      <div className="square last" />
      <div className="square clear" />
      <div className="square" />
      <div className="square last" />
      <div className="square clear" />
      <div className="square " />
      <div className="square last" />
    </div>
  </div>
);
