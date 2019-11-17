import { getConfig } from "services/api/config";

export const getAllCities = () => getConfig().then(config => config.cities);
