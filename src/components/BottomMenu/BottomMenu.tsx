import { useEffect, useRef } from "react";
import { PlayMusic } from "./components";
import * as S from "./styles";

type Props = {
  children?: JSX.Element;
  name?: string;
  favicon?: string;
  heat?: JSX.Element;
};

export const BottomMenu = ({ children, heat, favicon, name }: Props) => {
  return (
    <S.Container>
      <S.ContainerPlay>
        <S.IconPlay>
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
        </S.IconPlay>
        {children}
        <S.Options>{heat}</S.Options>
      </S.ContainerPlay>
    </S.Container>
  );
};
