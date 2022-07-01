import React from "react";
import headerLogo from "../../assets/headerLogo.png";
import HeaderMenu from "../HeaderMenu";
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
        <HeaderMenu />
      </ButtonArea>
    </Container>
  );
};
export default Header;
