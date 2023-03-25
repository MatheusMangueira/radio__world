import { useEffect, useRef } from "react";
import { PlayMusic } from "./components";
import * as S from "./styles";

type Props = {
  src?: any;
  children?: JSX.Element;

  name?: string;
  favicon?: string;

  heat?: JSX.Element;
};

export const BottomMenu = ({ children, src, heat, favicon, name }: Props) => {
  return (
    <S.Container>
      <S.ContainerPlayStations>
        <S.IconPlayStation>
          {favicon === "" ? (
            <p>{name}</p>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  marginBottom: "10px",
                }}
                src={favicon}
                alt="icon"
              />
              <p>{name}</p>
            </div>
          )}
        </S.IconPlayStation>
        {children}
        <S.Options>{heat}</S.Options>
      </S.ContainerPlayStations>
    </S.Container>
  );
};
