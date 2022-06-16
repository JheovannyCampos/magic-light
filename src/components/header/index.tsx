import React from "react";
import ButtonHeader from "../button-header";
import { Container, Title, ButtonArea } from "./styles";

const Header = () => {
  return (
    <Container>
      <Title>Magic Light</Title>
      <ButtonArea>
        <ButtonHeader title="Sobre Nós" />
        <ButtonHeader title="Contato" />
      </ButtonArea>
    </Container>
  );
};
export default Header;
