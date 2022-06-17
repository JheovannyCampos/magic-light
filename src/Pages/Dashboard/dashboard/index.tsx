import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";
import principalImg from "../../../assets/principal.jpg";
import wpp from "../../../assets/wpp.png";
import AboutUs from "../../../components/AboutUs";
import { Container, Title, ImageContainer, SubTitle } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>Reduza os custos de energia</Title>
      <SubTitle>
        Procuramos garantir o acesso à energia limpa e sustentável
      </SubTitle>
      <ImageContainer>
        <img
          src={principalImg}
          style={{
            maxWidth: "100%",
            height: "70%",
            filter: "contrast(75%)",
          }}
        />
      </ImageContainer>
      <AboutUs id="aboutus" title="Somos Magic Light" />
      <FloatingWhatsApp
        phoneNumber={"5562981226363"}
        accountName={"Magic Light"}
        chatMessage={"Olá, como posso ajudar?"}
        statusMessage={"Respondemos dentro de 1 hora"}
        placeholder={"Digite sua mensagem..."}
        notification={true}
        notificationSound={true}
        avatar={wpp}
      />
    </Container>
  );
};

export default Dashboard;
