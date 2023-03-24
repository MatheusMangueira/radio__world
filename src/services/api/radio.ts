import { RadioBrowserApi } from "radio-browser-api";

const api = new RadioBrowserApi("My Radio App");

// query stations by country code and limit to first 100 stations
export const stations = await api.searchStations({
  limit: 2500,
  hasGeoInfo: true
});
