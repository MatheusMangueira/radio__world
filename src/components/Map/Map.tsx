import * as S from "./styles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PopoverRadio } from "../PopoverRadio";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { PlayMusic } from "../BottomMenu/components";
import { BottomMenu } from "../BottomMenu";
import { useCallback, useEffect, useState } from "react";
import { stations } from "../../services/api/radio";
import { Heart } from "@phosphor-icons/react";

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
  const [refMenu, setRefMenu] = useState<any>();
  const [playUrl, setPlayUrl] = useState<string>("");
  const [clickedItemId, setClickedItemId] = useState(null);
  const [myFavorite, setMyFavorite] = useState<any>([]);

  const [heart, setHeart] = useState(false);

  useEffect(() => {
    setRefMenu({
      favicon: "https://cdn-icons-png.flaticon.com/512/10054/10054852.png",
      name: "Radio World",
    });
  }, []);

  const bounds: [number, number][] = [
    [-90, -190],
    [90, 190],
  ];

  const customIcon = new Icon({
    iconSize: [45, 45],
    iconUrl: "https://cdn-icons-png.flaticon.com/512/10054/10054852.png",
  });

  const play = useCallback(({ name, favicon, url, id }: any) => {
    setRefMenu({ name, favicon });
    setPlayUrl(url);
    if (clickedItemId === id) {
      setClickedItemId(null); // Desativa o item se ele já estiver clicado
    } else {
      setClickedItemId(id); // Ativa o item clicado
    }
  }, []);

  const addFavorite = useCallback((data: any) => {
    if (localStorage.hasOwnProperty("myFavorite")) {
      setMyFavorite(JSON.parse(localStorage?.getItem("myFavorite") || ""));
    }
    myFavorite.push({ data });
    localStorage.setItem("myFavorite", JSON.stringify(myFavorite));
  }, []);


  return (
    <>
      <BottomMenu
        // heat={
        //   <div
        //     style={{
        //       cursor: "pointer",
        //     }}
        //     onClick={() => addFavorite({ refMenu, playUrl })}
        //   >
        //     {heart ? <Heart size={34} weight="fill" /> : <Heart size={34} />}
        //   </div>
        // }
        favicon={refMenu?.favicon}
        name={refMenu?.name}
      >
        {playUrl ? <PlayMusic urlMusic={playUrl} /> : <div />}
      </BottomMenu>
      <MapContainer
        style={{
          height: "100vh",
          width: "100%",
          background:
            "linear-gradient(155deg, #736e8a 0, #504d72 25%, #282c59 50%, #000e41 75%, #00002d 100%)",
        }}
        center={[48.8566, 2.3522]}
        maxBounds={bounds}
        minZoom={2}
        zoom={5}
      >
        <CustomTileLayer />
        <MarkerClusterGroup>
          {stations?.map(({ id, geoLat, geoLong, name, url, favicon }) => {
            return (
              <Marker
                icon={customIcon}
                key={`place-${id}`}
                position={[Number(geoLat), Number(geoLong)]}
              >
                <Popup>
                  <PopoverRadio
                    reference={() => play({ name, favicon, url, id })}
                    isActived={clickedItemId === id}
                    name={name}
                    img={favicon}
                    height={"50px"}
                    width={"50px"}
                  />
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};
