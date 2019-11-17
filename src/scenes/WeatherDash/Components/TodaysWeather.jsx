import T from "i18n-react";
import React, { useState } from "react";
import classNames from "classnames";
import AnimateHeight from "react-animate-height";

import Button from "components/Button";
import { ReactComponent as Humidity } from "images/humidity.svg";

import Forecast from "./Forecast";

const HumidityAndWeatherIcon = ({ humidity, icon }) => (
  <div className="flex justify-between h4">
    <div className="flex pa4">
      <span className="f2 mr1">{humidity}</span>
      <div className="flex flex-column">
        <Humidity className="h1" />
        <span className="f5 mt2">%</span>
      </div>
    </div>
    <div className="">
      <img src={icon} alt="" />
    </div>
  </div>
);

const Temperature = ({ temperature }) => (
  <div className="mt4 self-center">
    <span className="f1">{temperature}</span>
    <span className="f2">°C</span>
  </div>
);

const PopupListForecast = ({ cityName }) => {
  const [heightEmpty, setHeightEmpty] = useState("auto");
  const [heightFull, setHeightFull] = useState(0);

  const toggle = () => {
    setHeightFull(heightFull === 0 ? "auto" : 0);
    setHeightEmpty(heightEmpty === 0 ? "auto" : 0);
  };

  return (
    <div>
      <AnimateHeight
        duration={500}
        height={heightEmpty} // see props documentation below
      >
        <div className="h4" />
      </AnimateHeight>
      <Button
        className={classNames("bg-white bg-inherit h3", {
          br2: heightFull === 0,
          "br--bottom": heightFull === 0
        })}
        text={T.translate("forecast")}
        onClick={toggle}
      />
      <AnimateHeight
        duration={500}
        height={heightFull} // see props documentation below
      >
        <div className="pa2 pt0 bg-white br2 br--bottom h5">
          <div className="bt b--off-black overflow-y-auto h5">
            <Forecast cityName={cityName} />
          </div>
        </div>
      </AnimateHeight>
    </div>
  );
};

export default ({ condition, cityName, temperature, ...humidityAndIcon }) => {
  return (
    <div className="flex flex-column min-h-100">
      <div className="flex flex-column justify-between" style={{ flexGrow: 1 }}>
        <HumidityAndWeatherIcon {...humidityAndIcon} />
        <div className="self-center f2">{condition}</div>
        <div className="self-center f3">{cityName}</div>
        <Temperature temperature={temperature} />
        <PopupListForecast cityName={cityName} />
      </div>
    </div>
  );
};
