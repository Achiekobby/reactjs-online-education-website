import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  NavbarContainer,
  NavbarWrapper,
  NavLogo,
  Nav,
  NavMenu,
  NavLink,
  LogoIcon,
  MobileMenu,
  NavBtn,
} from "./NavbarElements";
import { LinkData } from "../../data/NavData";
import { NavButton } from "../../helpers/Buttons/Buttons";

const Navbar = ({ toggleSideMenu }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const handleScrollNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <NavbarContainer scrollNav={scrollNav}>
        <NavbarWrapper>
          <NavLogo to="/" scrollNav={scrollNav} onClick={toggleHome}>
            <span>
              <LogoIcon scrollNav={scrollNav} />
            </span>
            <h1>SIKSHA</h1>
          </NavLogo>
          <MobileMenu onClick={toggleSideMenu} scrollNav={scrollNav} />
          <Nav>
            {LinkData.map((item, index) => {
              return (
                <NavMenu>
                  <NavLink
                    key={index}
                    to={item.path}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                    scrollNav={scrollNav}
                  >
                    {item.title}
                  </NavLink>
                </NavMenu>
              );
            })}
          </Nav>
          <NavBtn>
            <NavButton scrollNav={scrollNav} outline="true">
              Get Admission
            </NavButton>
          </NavBtn>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
