import { Heart, Headphones } from "@phosphor-icons/react";
import { GlobalStyle } from "../../GlobalStyles";
import * as S from "./styles";

const optionsList = [
  {
    id: "1",
    name: "Favoritos",
    url: "/favoritos",
    icon: <Heart size={20} />,
  },
  {
    id: "2",
    name: "Mais tocadas",
    url: "/mais-tocadas",
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
            <S.ContainerList key={item.id}>
              <S.List href={item.url}>
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
