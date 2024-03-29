import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: #fff;
  position: absolute;
  z-index: 10;
  align-self: end;
  padding-right: 2rem;
  top: 10rem;

  @media screen and (max-width: 1200px) {
    font-size: 3rem;
    top: 6rem;
  }
  @media screen and (max-width: 715px) {
    font-size: 2rem;
    top: 8rem;
  }
  @media screen and (max-width: 670px) {
    font-size: 2rem;
    top: 10rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    top: 5rem;
  }
`;

export const SubTitle = styled.p`
  font-weight: 500;
  font-size: 2rem;
  color: #ffd000;
  position: absolute;
  z-index: 10;
  align-self: end;
  padding-right: 2rem;
  top: 17rem;

  @media screen and (max-width: 1200px) {
    font-size: 2rem;
    top: 10rem;
  }

  @media screen and (max-width: 910px) {
    font-size: 1.5rem;
    top: 11rem;
  }

  @media screen and (max-width: 715px) {
    font-size: 1.5rem;
    top: 12rem;
  }

  @media screen and (max-width: 670px) {
    font-size: 1rem;
    top: 13rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
    top: 7rem;
    text-align: end;
  }
`;

export const Image = styled.img`
  width: 100%;
  filter: contrast(75%);
`;
