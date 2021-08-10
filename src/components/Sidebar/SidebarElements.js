import styled from "styled-components";
import { BiExit } from "react-icons/bi";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  transition: all 0.5s ease;
  background: linear-gradient(
    60deg,
    hsla(250, 94%, 56%, 1) 52%,
    hsla(295, 86%, 53%, 1) 100%
  );
  opacity: ${({ isOpen })=>(isOpen ? "100%":"0%")};
  right: ${({ isOpen }) => (isOpen ? "0":"-100%")};
`;

export const CloseIcon = styled(BiExit)`
  color: #fff;
  font-size: 3rem;
`;

export const Icon = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  outline: none;
  background: transparent;
`;
export const SidebarWrapper = styled.div`
color: #FFF;
`;
export const SidebarMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;
`;
export const SidebarLink = styled.div`
font-size: 1.2rem;
font-weight: 500;

`;
export const SidebarBtn = styled.div`
display: flex;
justify-content: center;
`;
