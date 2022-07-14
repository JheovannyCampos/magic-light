import React from "react";
import headerLogo from "../../assets/headerLogo.png";
import HeaderMenu from "../HeaderMenu";
import { Container, Image, ButtonArea } from "./styles";

const Header = () => {
  return (
    <Container>
      <Image src={headerLogo} />
      <ButtonArea>
        <HeaderMenu />
      </ButtonArea>
    </Container>
  );
};
export default Header;
