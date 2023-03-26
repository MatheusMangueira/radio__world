import styled from "styled-components";

export const Audio = styled.audio`
  display: none;
`;

export const Button = styled.button`
  border: none;
  background: #282c58;
  border-radius: 50%;
  color: #fff;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: #a37b97;
  }
`;

export const ButtonPaused = styled.button`
  border: none;
  background: #a37b97;
  border-radius: 50%;
  color: #fff;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: #282c58;
  }
`;
