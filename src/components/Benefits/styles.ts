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
`;

export const Image = styled.img`
  width: 100%;
  max-width: 1490px;
  border-radius: 10px;
  filter: contrast(75%);
`;

export const CardText = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  right: 10rem;
`;

export const Text = styled.p`
  font-size: 22px;
  color: #ffffff;
`;
