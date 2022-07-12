import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Text = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 5.4vw;
  color: #0095db;
  align-self: center;
  margin-right: 6rem;
`;
export const LeftSide = styled.div`
  width: 50%;
  height: 50rem;
  background-color: #0095db;
`;
export const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 50rem;
  background-color: #f2f4f6;
`;

export const Card = styled.div`
  display: flex;
  z-index: 10;
  position: relative;
  top: 10rem;
  left: 8rem;
  width: 50rem;
  max-height: fit-content;
  border-radius: 5px;
  padding: 50px;
  background-color: #ffffff;
`;

export const TextArea = styled.textarea`
  width: 42.5rem;
  height: 3rem;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  margin: 1rem;
  font-family: Roboto;
  font-weight: 300;
  font-size: 18px;
`;
