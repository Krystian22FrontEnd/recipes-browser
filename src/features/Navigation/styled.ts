import styled from "styled-components";
import background from "../../images/background.jpg";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  margin: 0 auto;
  height: 50vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  box-shadow: inset 0px 50px 80px 0px ${({ theme }) => theme.color.woodSmoke};
  margin-bottom: 75px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 32px;
`;

export const ListItem = styled.li`
  list-style-type: none;
  font-size: 20px;
  padding: 0 32px 32px;
  color: ${({ theme }) => theme.color.white};

  &:first-child {
    margin-right: auto;
  }
`;

export const SiteName = styled(ListItem)`
  font-size: 25px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
`;

export const NaviLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.concrete};

  &:hover {
    color: ${({ theme }) => theme.color.fruitSalad};
    transition: 0.3s;
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const CategoriesLink = styled(NaviLink)`
  display: inline-block;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 5px;
  min-width: 120px;
  opacity: 0;
  transform: scaleY(0);
  background-color: transparent;
  transform-origin: top;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;

  ${DropdownWrapper}:hover & {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: auto;
  }
`;

export const DropdownItem = styled(Link)`
  display: block;
  padding: 10px;
  color: ${({ theme }) => theme.color.greenHaze};
  text-decoration: none;
  transition: background 0.2s;
  background-color: ${({ theme }) => theme.color.white};
  text-align: center;

  &:first-child {
    margin-top: 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.fruitSalad};
  }
`;
