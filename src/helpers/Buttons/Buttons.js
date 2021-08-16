import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";

export const Button = styled(Link)`
  background: ${({ outline }) =>
    outline
      ? "transparent"
      : "linear-gradient(45deg, hsla(250, 94%, 56%, 1) 12%, hsla(295, 86%, 53%, 1) 100%)"};
  padding: ${({ wide }) => (wide ? "1.15rem 2.6rem" : "0.85rem 2.3rem")};
  width: ${({ wide }) => (wide ? "250px" : "200px")};
  text-align: center;
  text-decoration: none;
  color: #fff;
  border-radius: 5px;
  font-size: ${({ wide }) => (wide ? "1.25rem" : "1.03rem")};
  border: ${({ outline }) => (outline ? "1px solid #FFF" : "none")};
  outline: none;
  transition: all 0.5s ease-in;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const NavButton = styled(Link)`
  background: ${({ scrollNav }) =>
    scrollNav
      ? "linear-gradient(45deg, hsla(250, 94%, 56%, 1) 12%, hsla(295, 86%, 53%, 1) 100%)"
      : "transparent"};
  padding: ${({ wide }) => (wide ? "1.15rem 2.6rem" : "0.85rem 2.3rem")};
  width: ${({ wide }) => (wide ? "250px" : "200px")};
  text-align: center;
  text-decoration: none;
  color: #fff;
  border-radius: 5px;
  font-size: ${({ wide }) => (wide ? "1.25rem" : "1.03rem")};
  border: ${({ outline }) => (outline ? "1px solid #FFF" : "none")};
  outline: none;
  transition: all 0.5s ease-in;

  &:hover {
    transform: translateY(-5px);
  }
`;
