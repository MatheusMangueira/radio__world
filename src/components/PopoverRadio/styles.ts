import styled from "styled-components";

type props = {
  width?: string;
  height?: string;
  img?: string;
  isActived?: boolean;
};

export const Container = styled.div<props>`
  cursor: pointer;
  color: #000;
  z-index: 9999999;
  width: 100%;
  height: 100%;
  padding: 3px;
  ${(props) => props.isActived && "border:3px solid #a37b97;"}
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: 600;
  width: 100%;
  height: 100%;
  text-align: center;

  :hover {
    color: #a37b97;
  }
`;

export const Image = styled.div<props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  :hover {
    opacity: 0.8;
  }
`;
