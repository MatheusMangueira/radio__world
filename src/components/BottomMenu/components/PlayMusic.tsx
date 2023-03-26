import { useEffect, useRef, useState } from "react";
import * as S from "./styles";

type Props = {
  urlMusic?: string;
};

export const PlayMusic = ({ urlMusic }: Props) => {
  const [isPlay, setPlay] = useState(false);

  const audioEl = useRef<HTMLAudioElement>(null);

  const play = () => {
    if (!audioEl.current?.paused) {
      audioEl.current?.pause();
      setPlay(false);
      return;
    }
    setPlay(true);
    audioEl.current?.play();
  };

  return (
    <>
      {isPlay ? (
        <S.ButtonPaused onClick={play}>PAUSAR</S.ButtonPaused>
      ) : (
        <S.Button onClick={play}>PLAY</S.Button>
      )}
      <S.Audio
        key={`${isPlay}`}
        autoPlay={isPlay}
        controls
        ref={audioEl}
        src={urlMusic}
      />
    </>
  );
};
