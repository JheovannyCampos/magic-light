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
        <ButtonHeader title="Sobre nós" id={"aboutus"} />
        <ButtonHeader title="Vantagens" id={"benefits"} />
        <ButtonHeader title="Financiamentos" id={"financing"} />
        <ButtonHeader title="Contato" id={"Contato"} />
      </ButtonArea>
    </Container>
  );
};
export default Header;
