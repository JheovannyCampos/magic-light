import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 400px) {
    flex-direction: column-reverse;
  }
`;
export const Text = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 5.4vw;
  color: #0095db;
  align-self: center;
  margin-right: 6rem;

  @media (max-width: 400px) {
    align-self: flex-start;
    text-align: center;
    font-size: 3rem;
  }
`;
export const LeftSide = styled.div`
  width: 50%;
  height: 50rem;
  background-color: #0095db;

  @media (max-width: 400px) {
    width: 100%;
    height: 25rem;
  }
`;
export const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 50rem;
  background-color: #f2f4f6;

  @media (max-width: 400px) {
    width: 100%;
    height: 25rem;
  }
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

  @media (max-width: 400px) {
    width: 14rem;
    height: 25rem;
    top: -15rem;
    left: 2rem;
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 3rem;
`;
