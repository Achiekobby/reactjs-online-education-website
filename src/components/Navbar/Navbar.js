import React from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  NavLogo,
  Nav,
  NavMenu,
  NavLink,
  LogoIcon,
  MobileMenu,
  NavBtn
} from "./NavbarElements";
import { LinkData } from "../../data/NavData"
import { Button } from "../../helpers/Buttons/Buttons";

const Navbar = ({toggleSideMenu}) => {
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <NavLogo>
            <span>
              <LogoIcon />
            </span>
            <h1>SIKSHA</h1>
          </NavLogo>
          <MobileMenu onClick = {toggleSideMenu}/>
          <Nav>
            {LinkData.map((item, index) => {
              return (
                <NavMenu>
                  <NavLink key={index} to={item.path}>
                    {item.title}
                  </NavLink>
                </NavMenu>
              );
            })}
          </Nav>
          <NavBtn>
            <Button outline>Get Admission</Button>
          </NavBtn>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
