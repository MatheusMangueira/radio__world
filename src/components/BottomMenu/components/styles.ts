import styled from "styled-components";

export const Audio = styled.audio`
  display: none;
`;

export const Button = styled.button`
  border: none;
  background: #282c58;
  border-radius: 50%;
  padding: 8px;
  color: #fff;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  &:hover {
    background: #a37b97;
  }
`;

export const AudioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Live = styled.p`
  margin-top: 5px;
  font-size: 12px;
  color: #ccc;
  width: 100%;
  text-align: center;
  background-color: red;
  padding: 2px 5px;
  border-radius: 8px;
`;
