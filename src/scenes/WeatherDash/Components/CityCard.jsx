import React, { useState, useEffect } from "react";
import classNames from "classnames";

import runningInDevMode from "utils/runningInDevMode";
import { fetchCurrentWeather } from "services/api/weather";
import { ReactComponent as SadFace } from "images/sad_face.svg";

import Spinner from "./Spinner";
import TodaysWeather from "./TodaysWeather";

const getBackgroundByCloudinessAndTime = ({
  date,
  sunrise,
  sunset,
  cloudiness
} = {}) => {
  switch (true) {
    // lexicographic comparision works for iso dates
    case date < sunrise || date > sunset:
      return "bg-night";
    case cloudiness < 15:
      return "bg-sunny";
    case cloudiness < 40:
      return "bg-partiallySunny";
    case cloudiness < 80:
      return "bg-cloudy";
    default:
      return "bg-irish";
  }
};

export default ({ cityName }) => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCurrentWeather(cityName);
        setWeatherData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setTimeout(function() {
          setIsLoading(false);
        }, runningInDevMode && Math.random() * 1000);
      }
    };

    fetchData();
  }, [cityName]);

  return (
    <div
      className="flex-auto h-100 w-100 w-50-m w-30-ns w20-l  pa2"
      style={{ flexShrink: 0 }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <div
          className={classNames(
            "h-100 ba br2 b--off-black o-70",
            {
              "bg-red": isError
            },
            !isError && getBackgroundByCloudinessAndTime(weatherData)
          )}
        >
          {isError ? (
            <div className="h-100 w-100 flex justify-center">
              <SadFace className="w4" />
            </div>
          ) : (
            <TodaysWeather {...weatherData} />
          )}
        </div>
      )}
    </div>
  );
};
