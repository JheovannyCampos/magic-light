import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";
import principalWebp from "./assets/principal.webp";
import AboutUs from "../../../components/AboutUs";
import wpp from "./assets/wpp.png";
import { Container, Title, SubTitle, Image } from "./styles";
import ContactUs from "../../../components/ContactUs";
import Benefits from "../../../components/Benefits";
import Financing from "../../../components/Finacing";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>Reduza os custos de energia</Title>
      <SubTitle>
        Procuramos garantir o acesso à energia limpa e sustentável
      </SubTitle>
      <Image src={principalWebp} />

      <AboutUs id="aboutus" title="Somos Magic Light" />
      <Benefits title={"Vantagens"} />
      <Financing id="financing" />
      <ContactUs id="contactus" />
      <div style={{ zIndex: 20 }}>
        <FloatingWhatsApp
          phoneNumber={"5562981226363"}
          accountName={"Magic Light"}
          chatMessage={"Olá, como posso ajudar?"}
          statusMessage={"Respondemos dentro de 1 hora"}
          placeholder={"Digite sua mensagem..."}
          notification={true}
          avatar={wpp}
        />
      </div>
    </Container>
  );
};

export default Dashboard;
