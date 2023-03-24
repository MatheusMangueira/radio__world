import * as S from "./styles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PopoverRadio } from "../PopoverRadio";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

type Place = {
  id?: string;
  name?: string;
  slug?: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

type MapProps = {
  places?: Place[];
};

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

export const Map = ({ places }: MapProps) => {
  const bounds = [
    [-Infinity, -Infinity], // coordenadas do canto sudoeste (canto inferior esquerdo)
    [90, Infinity], // coordenadas do canto nordeste (canto superior direito)
  ];

  const customIcon = new Icon({
    iconSize: [45, 45],
    iconUrl: "https://cdn-icons-png.flaticon.com/512/10054/10054852.png",
  });

  return (
    <MapContainer
      style={{ height: "100vh", width: "100%" }}
      center={[48.8566, 2.3522]}
      maxBounds={bounds}
      minZoom={3}
      zoom={5}
    >
      <CustomTileLayer />
      <MarkerClusterGroup>
        {places?.map(({ slug, id, location, name }) => (
          <Marker
            icon={customIcon}
            key={`place-${id}`}
            position={[location.latitude, location.longitude]}
            eventHandlers={{}}
          >
            <Popup>teste</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};
