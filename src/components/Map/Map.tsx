import * as S from "./Styles";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

type MapProps = {
  places?: Place[];
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
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

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
