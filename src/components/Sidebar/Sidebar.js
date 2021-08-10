import React from "react";
import { LinkData } from "../../data/NavData";
import { Button } from "../../helpers/Buttons/Buttons";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtn
} from "./SidebarElements";

const Sidebar = ({isOpen, closeSideMenu}) => {

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <Icon>
          <CloseIcon onClick={closeSideMenu} />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            {LinkData.map((item, index) => {
              return (
                <SidebarLink to={item.path} key={index} onClick={closeSideMenu}>
                  {item.title}
                </SidebarLink>
              );
            })}
          </SidebarMenu>
          <SidebarBtn>
            <Button outline>Get Started</Button>
          </SidebarBtn>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
