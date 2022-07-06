import ButtonHeader from "../button-header";
import { ContainerMenu } from "./styles";

const HeaderMenu = () => {
  return (
    <ContainerMenu>
      <ButtonHeader title="Sobre nós" id={"aboutus"} />
      <ButtonHeader title="Vantagens" id={"benefits"} />
      <ButtonHeader title="Financiamentos" id={"financing"} />
      <ButtonHeader title="Contato" id={"contactus"} />
    </ContainerMenu>
  );
};
export default HeaderMenu;
