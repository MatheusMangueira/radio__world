import { useEffect, useState } from "react";
import { Map } from "../../components";
import { stations } from "../../services/api/radio";

export const Home = () => {
  const [stationsRadioT, setStationsRadioT] = useState<any>();

  const stationsRadio = stations.map((station) => ({
    location: {
      latitude: station.geoLat || 0,
      longitude: station.geoLong || 0,
    },
    name: station.name,
    id: station.id,
    slug: station.country,
  }));

  useEffect(() => {
    setStationsRadioT(stationsRadio);
  }, []);

  return <Map places={stationsRadioT} />;
};
