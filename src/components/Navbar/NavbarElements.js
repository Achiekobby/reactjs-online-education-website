import styled from "styled-components";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa";

export const NavbarContainer = styled.div`
  position: sticky;
  z-index: 10;
  width: 100%;
  height: 80px;
  background: transparent;
`;
export const NavbarWrapper = styled.div`
  max-width: 1300px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 700;
`;
export const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 1rem;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  color: #fff;
  margin-right: 15px;
`;
export const LogoIcon = styled(FaGraduationCap)`
  color: #fff;
  font-size: 3.13rem;
  margin-right: 3px;
`;

export const MobileMenu = styled(CgMenuRight)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 100%;
    font-size: 3rem;
    color: #fff;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
