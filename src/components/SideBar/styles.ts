import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 200px;
  background: #f1f1f1;
  border-radius: 4px;
  padding: 20px;
  z-index: 9999;
`;

export const ContainerList = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const TitleHeader = styled.h1`
  font-size: 20px;
  color: #3a3a3a;
  font-family: "Roboto", sans-serif;
  margin-bottom: 1rem;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  margin-bottom: 0.5rem;
  color: #3a3a3a;
  :hover {
    color: #a37b97;
  }
`;

export const NameList = styled.div`
  font-size: 16px;

  font-weight: 500;
  font-family: "Roboto", sans-serif;
`;

export const Icon = styled.div``;
