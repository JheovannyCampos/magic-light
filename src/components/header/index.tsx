import React from "react";
import headerLogo from "../../assets/headerLogo.png";
import ButtonHeader from "../button-header";
import { Container, Image, ButtonArea } from "./styles";

const Header = () => {
  return (
    <Container>
      <Image>
        <img
          src={headerLogo}
          style={{ width: "100%", height: "5rem", filter: "contrast(100%)" }}
        />
      </Image>
      <ButtonArea>
        <ButtonHeader title="Sobre nós" />
        <ButtonHeader title="Vantagens" />
        <ButtonHeader title="Financiamentos" />
        <ButtonHeader title="Contato" />
      </ButtonArea>
    </Container>
  );
};
export default Header;
