import { useEffect, useRef } from "react";
import * as S from "./styles";

type Props = {
  src?: any;
};

export const PlayMusic = ({ src }: Props) => {
  
  
  
  return (
    <S.PlayStations autoPlay controls>
      <source src={src} type="audio/mpeg"></source>
    </S.PlayStations>
  );
};
