import { getConfig } from "services/api/config";
import { getJson } from "services/api/index";
import {
  transformForecastData,
  transformWeatherData
} from "services/dataTransformations/transformData";

const getUrl = (cityName, applicationId, type = "weather") =>
  `/${type}?q=${cityName}&APPID=${applicationId}&&units=metric`;

export const fetchCurrentWeather = cityName =>
  getConfig().then(({ applicationId, frontendDataTransformation }) =>
    getJson(getUrl(cityName, applicationId)).then(result =>
      frontendDataTransformation ? transformWeatherData(result) : result
    )
  );

export const fetchForecast = cityName =>
  getConfig().then(({ applicationId, frontendDataTransformation }) =>
    getJson(getUrl(cityName, applicationId, "forecast")).then(result =>
      frontendDataTransformation ? transformForecastData(result) : result
    )
  );
