import { RadioBrowserApi } from "radio-browser-api";

export const getStations = async () => {
  const api = new RadioBrowserApi("My Radio App");
  api.setBaseUrl('https://de1.api.radio-browser.info');

  const stations = await api.searchStations({
    hasGeoInfo: true,
  })
    .then((data) => {
      return data
    })

  return stations;
};
