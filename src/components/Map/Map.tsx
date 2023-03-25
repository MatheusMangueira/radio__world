import * as S from "./styles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PopoverRadio } from "../PopoverRadio";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { PlayMusic } from "../BottomMenu/components";
import { BottomMenu } from "../BottomMenu";
import { useEffect, useState } from "react";
import { stations } from "../../services/api/radio";

const CustomTileLayer = () => {
  return import.meta.env.VITE_MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${
        import.meta.env.VITE_MAPBOX_USERID
      }/${
        import.meta.env.VITE_MAPBOX_STYLEID
      }/tiles/256/{z}/{x}/{y}@2x?access_token=${
        import.meta.env.VITE_MAPBOX_API_KEY
      }`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
};

export const Map = () => {
  const bounds: [number, number][] = [
    [-90, -190],
    [90, 190],
  ];

  const customIcon = new Icon({
    iconSize: [45, 45],
    iconUrl: "https://cdn-icons-png.flaticon.com/512/10054/10054852.png",
  });

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

  const urls = stations.map((stations) => stations.url);

  return (
    <>
      <BottomMenu src={urls && urls} children={<PlayMusic src={urls} />} />
      <MapContainer
        style={{
          height: "100vh",
          width: "100v%",
          background:
            "linear-gradient(155deg, #736e8a 0, #504d72 25%, #282c59 50%, #000e41 75%, #00002d 100%)",
        }}
        center={[48.8566, 2.3522]}
        maxBounds={bounds}
        minZoom={3}
        zoom={5}
      >
        <CustomTileLayer />
        <MarkerClusterGroup>
          {stationsRadio?.map(({ id, location, name, url }) => {
            return (
              <Marker
                icon={customIcon}
                key={`place-${id}`}
                position={[location.latitude, location.longitude]}
                eventHandlers={{}}
              >
                <Popup>teste</Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};
