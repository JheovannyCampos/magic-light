import { Col, Row } from "react-bootstrap";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import ButtonHeader from "../button-header";
import headerLogo from "../../assets/headerLogo.png";
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
          src={headerLogo}
          style={{ marginTop: "10px", width: 250, cursor: "pointer" }}
        />
        <AddressText>R. Capitão Antônio Pedro da Cunha</AddressText>
        <AddressText>Vale do Araguaia</AddressText>
        <AddressText>Goiânia - Goiás</AddressText>
      </Address>
      <Contact>
        <ContactText>
          <AiOutlinePhone
            style={{ color: "white", fontSize: 28, marginRight: "5px" }}
          />{" "}
          +55 (62) 98122-6363
        </ContactText>

        <ContactText style={{ color: "#FFD000", fontWeight: 500 }}>
          {" "}
          <AiOutlineMail
            style={{ color: "#FFD000", fontSize: 28, marginRight: "5px" }}
          />{" "}
          magiclight@gmail.com
        </ContactText>

        <ContactText>
          <AiOutlineWhatsApp
            style={{ color: "white", fontSize: 28, marginRight: "5px" }}
          />
          Fale via Whatsapp
        </ContactText>
      </Contact>
      <FooterMenu>
        <ButtonHeader title="Sobre nós" id={"aboutus"} />
        <ButtonHeader title="Vantagens" id={"benefits"} />
        <ButtonHeader title="Financiamentos" id={"financing"} />
        <ButtonHeader title="Contato" id={"Contato"} />
      </FooterMenu>
    </Container>
  );
};
export default Footer;
