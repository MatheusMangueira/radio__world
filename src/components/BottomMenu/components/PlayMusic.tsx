import { Pause, Play } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import * as S from "./styles";

import BounceLoader from "react-spinners/BounceLoader";

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
      <S.AudioContainer>
        <S.Button onClick={play}>
          {!isPlay ? (
            <Play size={24} weight="fill" />
          ) : (
            <Pause size={24} weight="fill" />
          )}
        </S.Button>

        <S.Live>Live</S.Live>
      </S.AudioContainer>
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
