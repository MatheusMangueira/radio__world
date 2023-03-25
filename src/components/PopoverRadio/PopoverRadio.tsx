import { useEffect, useState } from "react";
import { GlobalStyle } from "../../GlobalStyles";
import * as S from "./styles";

type PopoverRadioProps = {
  name?: string;
  play?: () => void;
  img?: string;
  width?: string;
  height?: string;
  isActived?: boolean;
};

export const PopoverRadio = ({
  name,
  img,
  play,
  height,
  width,
  isActived,
}: PopoverRadioProps) => {
  return (
    <>
      <GlobalStyle />
      <S.Container
        isActived={isActived}
        onClick={() => {
          play && play();
        }}
      >
        {img === "" ? (
          <S.Title>{name}</S.Title>
        ) : (
          <S.Image height={height} width={width} img={img} />
        )}
      </S.Container>
    </>
  );
};
