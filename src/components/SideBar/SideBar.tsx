import { Heart, Headphones } from "@phosphor-icons/react";
import { GlobalStyle } from "../../GlobalStyles";
import * as S from "./styles";

const optionsList = [
  {
    id: "1",
    name: "Favoritos",
    icon: <Heart size={20} />,
  },
  {
    id: "2",
    name: "Mais tocadas",
    icon: <Headphones size={20} />,
  },
];

export const SideBar = () => {
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.TitleHeader>Radio World</S.TitleHeader>
        {optionsList.map((item) => {
          return (
            <S.ContainerList>
              <S.List>
                <S.Icon>{item.icon}</S.Icon>
                <S.NameList onClick={() => {}} key={item.id}>
                  {item.name}
                </S.NameList>
              </S.List>
            </S.ContainerList>
          );
        })}
      </S.Container>
    </>
  );
};
