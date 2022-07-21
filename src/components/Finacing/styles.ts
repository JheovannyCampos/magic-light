import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  color: #ffd000;
`;

export const Subtitle = styled.h3`
  font-weight: 300;
  font-size: 20px;
  color: #8f8d8d;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 35rem;
  align-items: center;
  justify-content: space-around;
  background-image: linear-gradient(#ffffff, #f3d68f);

  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding-bottom: 15px;
  }
`;

export const Image = styled.img`
  width: 150px;
`;
