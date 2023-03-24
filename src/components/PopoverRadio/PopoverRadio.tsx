import * as S from "./styles";

type PopoverRadioProps = {
  name?: string;
  url?: string;
  img?: string;
};

export const PopoverRadio = ({ name, url, img }: PopoverRadioProps) => {
  return (
    <S.Container>
      <p>{name}</p>
    </S.Container>
  );
};
