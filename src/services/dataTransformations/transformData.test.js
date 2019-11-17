import { dissoc } from "ramda";

import forecastBefore from "testData/forecastBefore.json";
import forecastAfter from "testData/forecastAfter.json";
import weatherBefore from "testData/weatherBefore.json";
import weatherAfter from "testData/weatherAfter.json";

import { transformForecastData, transformWeatherData } from "./transformData";

describe("Check that forecast transformation works", () => {
  test("Bad data - null", () => {
    expect(transformForecastData(null)).toEqual([]);
  });

  test("Bad data - empty", () => {
    expect(transformForecastData({})).toEqual([]);
  });

  test("Bad data - issue", () => {
    expect(
      transformForecastData({
        list: [
          dissoc("weather", forecastBefore.list[0]),
          dissoc("weather", forecastBefore.list[1]),
          dissoc("weather", forecastBefore.list[2])
        ]
      })
    ).toEqual([
      {
        ...forecastAfter[0],
        condition: undefined,
        icon: undefined
      }
    ]);
  });

  test("Good data", () => {
    expect(transformForecastData(forecastBefore)).toEqual(forecastAfter);
  });
});

describe("Check that today's weather transformation works", () => {
  test("Bad data - null", () => {
    expect(transformWeatherData(null)).toEqual({});
  });

  test("Bad data - empty", () => {
    expect(transformWeatherData({})).toEqual({
      cityName: undefined,
      cloudiness: undefined,
      condition: undefined,
      humidity: undefined,
      icon: undefined,
      temperature: undefined
    });
  });

  test("Bad data - issue", () => {
    expect(
      transformWeatherData({ ...weatherBefore, main: undefined })
    ).toEqual({ ...weatherAfter, humidity: undefined, temperature: undefined });
  });

  test("Good data", () => {
    expect(transformWeatherData(weatherBefore)).toEqual(weatherAfter);
  });
});
