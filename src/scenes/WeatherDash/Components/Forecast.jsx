import T from "i18n-react";
import React, { useState, useEffect } from "react";

import runningInDevMode from "utils/runningInDevMode";
import { fetchForecast } from "services/api/weather";
import { ReactComponent as SadFace } from "images/sad_face.svg";
import { isToday, isTomorrow, monthDay } from "utils/dates";

import Spinner from "./Spinner";

const formatDate = date => {
  if (isToday(date)) return T.translate("today");
  if (isTomorrow(date)) return T.translate("tomorrow");
  return monthDay(date);
};

const ListOfDays = ({ forecastData }) => (
  <div className="flex flex-column pa2 ">
    {forecastData.map(({ date, maxTemp, minTemp, condition, icon }) => (
      <div className="h3 pa2 flex justify-center " key={date}>
        <div
          className="self-center mr3 w4 fw6"
          style={{ flexGrow: 1, minWidth: "4rem" }}
        >
          {formatDate(new Date(date))}
        </div>
        <div className="self-center flex mr3">
          <div className="pb2 flex red">
            <div className="f4 ">{maxTemp}</div>
            <span className="f5">°C</span>
          </div>
          <span className="f2">/</span>
          <div className="pt3 flex blue">
            <div className="f4 ">{minTemp}</div>
            <span className="f5">°C</span>
          </div>
        </div>
        <img className="self-center h3 w3" src={icon} alt={condition} />
      </div>
    ))}
  </div>
);

export default ({ cityName }) => {
  const [forecastData, setForecastData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchForecast(cityName);
        setForecastData(result);
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
    <div className="h-100 w-100 ph2">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="h-100">
          {isError ? (
            <div className="h-100 w-100 flex justify-center">
              <SadFace className="w4" />
            </div>
          ) : (
            <ListOfDays forecastData={forecastData} />
          )}
        </div>
      )}
    </div>
  );
};
