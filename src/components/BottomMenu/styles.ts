import { type } from "os";
import styled from "styled-components";

type props = {
  icon?: string;
};

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  z-index: 9999;
  box-shadow: rgb(0, 0, 0, 19%) 1px 1px 10px;
  background-color: #fff;
`;

export const ContainerPlayStations = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px 0 15px;
`;

export const Options = styled.div``;

export const IconPlayStation = styled.div``;
