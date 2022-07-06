import styled from "styled-components";
import workingWebp from "./assets/working.webp";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  color: #ffd000;
`;

export const TextContainer = styled.div`
  width: 45rem;
`;

export const Text = styled.h2`
  font-weight: 300;
  color: #8f8d8d;
  margin-right: 2rem;
  text-align: justify;
`;

export const Image = styled.img`
  width: 720px;
  margin: 3rem 1rem 3rem 5rem;
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
