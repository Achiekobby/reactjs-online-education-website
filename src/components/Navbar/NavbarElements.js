import styled from "styled-components";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa";
import { Link as LinkS } from "react-scroll"

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 80px;
  background: ${({ scrollNav }) => (scrollNav ? "#FFF" : "transparent")};
  box-shadow: ${({ scrollNav }) => (scrollNav ? "0 2px 4px rgba(0,0,0,.2)" : "none")};
  transition: all 0.5s ease-in-out;
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

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ scrollNav }) => (scrollNav ? "#4635ff" : "#fff")};
  font-size: clamp(1rem, 2vw, 1.5rem);
  text-decoration: none;
  cursor: pointer;
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
export const NavLink = styled(LinkS)`
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ scrollNav }) => (scrollNav ? "#4635ff" : "#fff")};
  margin-right: 15px;

  &.active {
    color: ${({ scrollNav }) => (scrollNav ? "#CB04C3" : "#33E0FD")};
    font-weight: 600;
    transition: all .5s ease;
  }
`;
export const LogoIcon = styled(FaGraduationCap)`
  color: ${({ scrollNav }) => (scrollNav ? "#4635ff" : "#fff")};
  font-size: 3.13rem;
  margin-right: 3px;
`;

export const MobileMenu = styled(CgMenuRight)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 100%;
    font-size: 3rem;
    color: ${({ scrollNav }) => (scrollNav ? "#4635ff" : "#fff")};
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