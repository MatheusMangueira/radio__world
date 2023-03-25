import { useEffect, useState } from "react";
import { Map } from "../../components";
import { Play } from "../../components/Play";
import { PopoverRadio } from "../../components/PopoverRadio";
import { SideBar } from "../../components/SideBar";
import { stations } from "../../services/api/radio";

export const Home = () => {
  const [stationsRadioT, setStationsRadioT] = useState<any>();

  const stationsRadio = stations.map((station) => ({
    location: {
      latitude: station.geoLat || 0,
      longitude: station.geoLong || 0,
    },
    name: station.name,
    url: station.urlResolved,
    id: station.id,
    slug: station.country,
  }));

  useEffect(() => {
    setStationsRadioT(stationsRadio);
  }, []);

  const urls = stationsRadio.map((stationsURL) => stationsURL.url);

  return (
    <>
      <SideBar />
      <Play src={urls && urls} />
      <Map places={stationsRadioT} />
    </>
  );
};
