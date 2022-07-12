import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 15rem;
  background-color: #0174b5;
  justify-content: space-around;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AddressText = styled.h3`
  color: white;
  font-family: Roboto;
  font-weight: 300;
  margin-bottom: 0;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ContactText = styled.a`
  display: flex;
  flex-direction: row;
  color: white;
  font-family: Roboto;
  font-weight: 300;
  font-size: 22px;
  margin-bottom: 0;
  text-decoration: none;
  cursor: pointer;
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
