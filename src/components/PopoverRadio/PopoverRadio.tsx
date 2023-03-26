import { useEffect, useState } from "react";
import { GlobalStyle } from "../../GlobalStyles";
import * as S from "./styles";

type PopoverRadioProps = {
  name?: string;
  reference?: () => void;
  img?: string;
  width?: string;
  height?: string;
  isActived?: boolean;
  play?: () => void;
};

export const PopoverRadio = ({
  name,
  img,
  reference,
  height,
  width,
  isActived,
  play,
}: PopoverRadioProps) => {
  return (
    <>
      <GlobalStyle />
      <S.Container
        isActived={isActived}
        onClick={() => {
          reference && reference();
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
