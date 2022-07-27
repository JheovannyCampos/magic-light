import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 740px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 480px) {
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

  @media (max-width: 1460px) {
    font-size: 4.5vw;
  }

  @media (max-width: 890px) {
    align-self: flex-start;
    margin-right: px;
    text-align: center;
    font-size: 3rem;
  }

  @media (max-width: 740px) {
    align-self: flex-start;
    text-align: center;
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    align-self: flex-start;
    text-align: center;
    font-size: 3rem;
  }
`;
export const LeftSide = styled.div`
  width: 50%;
  height: 50rem;
  background-color: #0095db;

  @media (max-width: 740px) {
    width: 100%;
    height: 25rem;
  }
  @media (max-width: 480px) {
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

  @media (max-width: 740px) {
    width: 100%;
    height: 25rem;
  }
  @media (max-width: 480px) {
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
  align-items: center;

  @media (max-width: 1400px) {
    width: 45rem;
  }

  @media (max-width: 1280px) {
    width: 35rem;
  }

  @media (max-width: 1080px) {
    width: 25rem;
  }

  @media (max-width: 740px) {
    width: 20rem;
    height: fit-content;
    top: -15rem;
    left: 2rem;
    justify-content: center;
  }
  @media (max-width: 480px) {
    width: 14rem;
    height: 25rem;
    top: -15rem;
    left: 3rem;
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  /* @media screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  } */

  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;
