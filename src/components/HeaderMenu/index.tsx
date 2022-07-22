import React from "react";
import ButtonHeader from "../button-header";
import { ContainerMenu, MenuDropdown } from "./styles";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { AiOutlineMenu } from "react-icons/ai";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const HeaderMenu = () => {
  return (
    <div>
      <ContainerMenu>
        <ButtonHeader title="Sobre nós" id={"aboutus"} />
        <ButtonHeader title="Vantagens" id={"benefits"} />
        <ButtonHeader title="Financiamentos" id={"financing"} />
        <ButtonHeader title="Contato" id={"contactus"} />
      </ContainerMenu>
      <MenuDropdown>
        <Menu
          menuButton={
            <MenuButton
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              <AiOutlineMenu
                style={{ width: "32px", height: "32px", color: "black" }}
              />
            </MenuButton>
          }
          transition
          className="menu"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "fit-content",
            }}
          >
            <ButtonHeader title="Sobre nós" id={"aboutus"} />
            <ButtonHeader title="Vantagens" id={"benefits"} />
            <ButtonHeader title="Financiamentos" id={"financing"} />
            <ButtonHeader title="Contato" id={"contactus"} />
          </div>
        </Menu>
      </MenuDropdown>
    </div>
  );
};
export default HeaderMenu;
