import { Form } from "@unform/web";
import React from "react";
import emailjs from "emailjs-com";
import { Button } from "../ButtonForm/styles";
import Input from "../Input";
import TextArea from "../TextArea";
import { Text, Container, LeftSide, RightSide, Card } from "./styles";

interface contactUsProps {
  id: string;
}

const ContactUs = (Props: contactUsProps) => {
  const { id } = Props;
  const formRef = React.useRef<any>();

  const handleSubmit = (data) => {
    // e.preventDefault();
    emailjs
      .send("GmailMessage", "template_jwvzm9h", data, "g9EO9zCkneGPTRi_d")
      .then(
        (response) => {
          alert("SUCCESS!");
        },
        (err) => {
          alert(err.message);
        }
      );
    formRef.current?.reset();
  };

  return (
    <Container id={id}>
      <LeftSide>
        <Card>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" label="" placeholder="Nome" required />
            <Input name="email" label="" placeholder="E-mail" required />
            <Input name="phone" label="" placeholder="Telefone" required />
            <Input
              name="expense"
              label=""
              placeholder="Qual o seu Gasto? (R$/mês)"
              required
            />
            <TextArea name="mensage" placeholder="Mensagem" label="" required />
            <Button type="submit">Enviar</Button>
          </Form>
        </Card>
      </LeftSide>
      <RightSide>
        <Text>
          Entre em <br></br> Contato
        </Text>
      </RightSide>
    </Container>
  );
};
export default ContactUs;
