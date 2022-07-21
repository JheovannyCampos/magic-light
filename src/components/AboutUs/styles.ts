import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  color: #ffd000;
`;

export const TextContainer = styled.div`
  width: 45rem;
  @media screen and (max-width: 580px) {
    width: 485px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Text = styled.h2`
  font-weight: 300;
  color: #8f8d8d;
  margin-right: 2rem;
  text-align: justify;

  @media screen and (max-width: 1250px) {
    text-align: center;
    font-size: 18px;
    margin: 0;
  }

  @media screen and (max-width: 580px) {
    text-align: center;
    font-size: 18px;
    margin: 0;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 18px;
    margin: 0 10px 0 10px;
  }
`;

export const Image = styled.img`
  width: 700px;
  margin: 3rem 1rem 3rem 5rem;
  border-radius: 10px;

  @media screen and (max-width: 1250px) {
    width: 550px;
    margin: 3rem 1rem 3rem 1rem;
    border-radius: 0;
  }
  @media screen and (max-width: 750px) {
    width: 350px;
    margin: 3rem 1rem 3rem 1rem;
    border-radius: 0;
  }
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 0;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 580px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;
