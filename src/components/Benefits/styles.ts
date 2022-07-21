import styled from "styled-components";

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1490px;
  max-height: fit-content;
  background-color: #ffffff;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  color: #ffd000;
`;

export const SubTitle = styled.p`
  font-weight: 300;
  font-size: 20px;
  color: #8f8d8d;

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 18px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: contrast(80%);

  @media screen and (max-width: 480px) {
    height: 290px;
  }
`;

export const CardText = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  right: 10rem;

  @media screen and (max-width: 1390px) {
    right: 5rem;
  }

  @media screen and (max-width: 1080px) {
    right: 2rem;
  }
  @media screen and (max-width: 830px) {
    right: 1rem;
    margin-top: 7rem;
  }
  @media screen and (max-width: 480px) {
    margin-top: 13rem;
    margin-right: 4rem;
  }
`;

export const Text = styled.p`
  font-size: 22px;
  color: #ffffff;

  @media screen and (max-width: 1080px) {
    font-size: 18px;
  }
  @media screen and (max-width: 930px) {
    font-size: 15px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    font-weight: 500;
  }
`;
