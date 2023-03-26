import { RadioBrowserApi } from "radio-browser-api";

const api = new RadioBrowserApi("My Radio App");

export const getStations = async () => {
  // query stations by country code and limit to first 100 stations
  const stations = await api.searchStations({
    // limit: 10,
    hasGeoInfo: true,
  });
  return stations;
};
