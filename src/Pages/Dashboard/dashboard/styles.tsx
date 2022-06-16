import styled from 'styled-components';

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
`;

export const ImageContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: center;
  background-color: #ffff;
  align-self: center;
`;
