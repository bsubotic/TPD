import React from "react";
import T from "i18n-react";

import "./NotSupportedBrowser.scss";
import firefoxIcon from "images/mozzila-icon.svg";
import chromeIcon from "images/chrome-icon.svg";
import ieIcon from "images/ie-icon.png";
import safariIcon from "images/safari-icon.png";

const browserLink = (image, title, link) => (
  <div className="nsb-browser-link">
    <img alt={title} src={image} className="mb5" />
    <div className="nsb-text clear">{title}</div>
    <a href={link} target="_blank" rel="noopener noreferrer">
      {T.translate("browserNotSupported.download")}
    </a>
  </div>
);

export default () => (
  <div id="nsb-container">
    <div className="nsb-center" id="nsb-contentholder">
      <div className="nsb-container-fluid" id="nsb-content">
        <div className="pt4 nsb-center" id="nsb-browser-not-supported-page">
          <span className="nsb-title">
            {T.translate("browserNotSupported.title")}
          </span>
          <div className="mt5 nsb-text">
            {T.translate("browserNotSupported.text")}
          </div>
          <div>
            {browserLink(
              safariIcon,
              T.translate("browserNotSupported.safari"),
              T.translate("browserNotSupported.safariLink")
            )}
            {browserLink(
              firefoxIcon,
              T.translate("browserNotSupported.firefox"),
              T.translate("browserNotSupported.firefoxLink")
            )}
            {browserLink(
              chromeIcon,
              T.translate("browserNotSupported.chrome"),
              T.translate("browserNotSupported.chromeLink")
            )}
            {browserLink(
              ieIcon,
              T.translate("browserNotSupported.ie"),
              T.translate("browserNotSupported.ieLink")
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
