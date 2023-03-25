import { useRef } from "react";
import * as S from "./styles";

type Props = {
  src?: any;
};

export const Play = ({ src }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleAudioPlay = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <S.Container>
      <S.ContainerPlayStations>
        <S.IconPlayStation>alou vcc 1</S.IconPlayStation>
        <S.PlayStations ref={audioRef} controls>
          <source src={src} type="audio/mpeg"></source>
        </S.PlayStations>
        <button onClick={handleAudioPlay}>Tocar/Pausar</button>
        <S.Options>alou vc</S.Options>
      </S.ContainerPlayStations>
    </S.Container>
  );
};
