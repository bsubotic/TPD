import { epochToDate } from "utils/dates";

const DAYS_OF_FORECAST = 5;

const getIconSrc = icon =>
  icon && `http://openweathermap.org/img/wn/${icon}@2x.png`;

export const transformForecastData = data => {
  if (!data) return [];

  const { list = [] } = data;

  let newListOfForecast = [];
  let prevDate = new Date();
  for (let i = 0, j = -1; i < list.length; i++) {
    const {
      dt,
      main: { temp_max: maxTemp, temp_min: minTemp },
      weather: [{ main: condition, icon }] = [{}]
    } = list[i];

    let date = epochToDate(dt);

    const hours = date.getHours();
    const newItem = newListOfForecast[j];
    const newMin = (newItem && newItem.minTemp) || Number.POSITIVE_INFINITY;
    const newMax = (newItem && newItem.maxTemp) || Number.NEGATIVE_INFINITY;

    date.setHours(0, 0, 0, 0);

    if (prevDate.getTime() !== date.getTime()) {
      prevDate = date;
      if (++j >= DAYS_OF_FORECAST) break;
    }

    newListOfForecast[j] = {
      date: date.toISOString(),
      minTemp: Math.min(newMin, minTemp),
      maxTemp: Math.max(newMax, maxTemp),
      condition: hours === 15 ? condition : newItem && newItem.condition,
      icon: hours === 15 ? getIconSrc(icon) : newItem && newItem.icon
    };
  }
  return newListOfForecast;
};

export const transformWeatherData = data => {
  if (!data) return {};

  const {
    dt: dateEpoch,
    sys: { sunrise: sunriseEpoch, sunset: sunsetEpoch } = {},
    clouds: { all: cloudiness } = {},
    main: { temp: temperature, humidity } = {},
    weather: [{ main: condition, icon: iconCode }] = [{}],
    name: cityName
  } = data;

  return {
    cityName,
    condition,
    icon: getIconSrc(iconCode),
    temperature,
    cloudiness,
    humidity,
    date: dateEpoch && epochToDate(dateEpoch).toISOString(),
    sunrise: sunriseEpoch && epochToDate(sunriseEpoch).toISOString(),
    sunset: sunsetEpoch && epochToDate(sunsetEpoch).toISOString()
  };
};
