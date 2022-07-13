import React from "react";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import ButtonHeader from "../button-header";
import FooterLogo from "./assets/FooterLogo.png";
import {
  Container,
  Address,
  AddressText,
  Contact,
  ContactText,
  FooterMenu,
} from "./styles";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <Address>
        <img
          onClick={() => scrollToTop()}
          src={FooterLogo}
          style={{ marginTop: "10px", width: 250, cursor: "pointer" }}
        />
        <AddressText>R. Capitão Antônio Pedro da Cunha</AddressText>
        <AddressText>Vale do Araguaia</AddressText>
        <AddressText>Goiânia - Goiás</AddressText>
      </Address>
      <Contact>
        <ContactText>
          <AiOutlinePhone
            style={{
              color: "white",
              fontSize: 28,
              marginRight: "5px",
            }}
          />{" "}
          (62) 98122-6363
        </ContactText>
        <ContactText
          // onClick={() => window.open("tel:+5562981226363")}
          href="tel://+5562981226363"
          style={{
            color: "#FFD000",
            fontWeight: 500,
          }}
        >
          {" "}
          <AiOutlineMail
            style={{ color: "#FFD000", fontSize: 28, marginRight: "5px" }}
          />{" "}
          magiclight@gmail.com
        </ContactText>

        <ContactText href="https://api.whatsapp.com/send/?phone=5562981226363&text=Olá,%20gostaria%20de%20um%20orçamento!">
          <AiOutlineWhatsApp
            style={{ color: "white", fontSize: 28, marginRight: "5px" }}
          />
          Fale via Whatsapp
        </ContactText>
      </Contact>
      <FooterMenu>
        <ButtonHeader isFooter={true} title="Sobre nós" id={"aboutus"} />
        <ButtonHeader isFooter={true} title="Vantagens" id={"benefits"} />
        <ButtonHeader isFooter={true} title="Financiamentos" id={"financing"} />
        <ButtonHeader isFooter={true} title="Contato" id={"Contato"} />
      </FooterMenu>
    </Container>
  );
};
export default Footer;
