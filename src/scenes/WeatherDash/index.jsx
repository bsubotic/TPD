import React, { useState, useEffect } from "react";

import { getAllCities } from "services/api/cities";

import CityCard from "./Components/CityCard";

export default () => {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    getAllCities().then(cities => setCities(cities));
  }, []);

  return (
    <div className="pa4 flex flex-nowrap overflow-x-auto h-100">
      {cities &&
        cities.map(cityName => <CityCard key={cityName} cityName={cityName} />)}
    </div>
  );
};
