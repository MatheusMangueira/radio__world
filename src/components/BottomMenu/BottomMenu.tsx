import { useEffect, useRef } from "react";
import { PlayMusic } from "./components";
import * as S from "./styles";

type Props = {
  src?: any;
  children?: JSX.Element;
};

export const BottomMenu = ({ children, src }: Props) => {
  return (
    <S.Container>
      <S.ContainerPlayStations>
        <S.IconPlayStation>alou vcc 1</S.IconPlayStation>
        {children}
        <S.Options>alou vc</S.Options>
      </S.ContainerPlayStations>
    </S.Container>
  );
};
