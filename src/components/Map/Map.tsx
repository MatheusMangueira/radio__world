import * as S from "./Styles";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

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
      // attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
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
      // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
};

export const Map = ({ places }: MapProps) => {
  const bounds = [
    [-Infinity, -Infinity], // coordenadas do canto sudoeste (canto inferior esquerdo)
    [90, Infinity], // coordenadas do canto nordeste (canto superior direito)
  ];
  return (
    <S.Container>
      <MapContainer
        style={{ height: "100vh", width: "100%" }}
        center={[51.505, -0.09]}
        maxBounds={bounds}
        minZoom={3}
        zoom={5}
      >
        <CustomTileLayer />
        {places?.map(({ slug, id, location, name }) => {
          const { latitude, longitude } = location;

          return (
            <Marker key={`place-${id}`} position={[latitude, longitude]} />
          );
        })}
      </MapContainer>
    </S.Container>
  );
};
