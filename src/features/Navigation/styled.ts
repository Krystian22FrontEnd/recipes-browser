import styled from "styled-components";
import background from "../../images/background.jpg";
import { Link } from "react-router-dom";
import { ReactComponent as chefHatIco } from "../../icons/chefHat.svg";

export const Nav = styled.nav`
  margin: 0 auto;
  height: 50vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  box-shadow: inset 0px 50px 80px 0px ${({ theme }) => theme.color.woodSmoke};
  margin-bottom: 30px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding-left: 0;
`;

export const ListItem = styled.li`
  list-style-type: none;
  font-size: 26px;
  padding: 16px 32px 0 32px;
  color: ${({ theme }) => theme.color.white};

  &:first-child {
    margin-right: auto;
  }
`;

export const SiteName = styled(ListItem)`
  font-size: 32px;
  font-weight: 700;
`;

export const NaviLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.concrete};

  &:hover {
    color: ${({ theme }) => theme.color.fruitSalad};
    transition: 0.3s;
  }
`;

export const ChefHatIcon = styled(chefHatIco)`
  width: 55px;
  height: auto;
  margin: 0 24px 10px 0;
  transition: 0.3s;
  color: ${({ theme }) => theme.color.fruitSalad};

  &:hover {
    transform: scale(1.1);
  }
`;

export const SiteNameLink = styled(NaviLink)`
  display: flex;
  align-items: center;

  &:hover ${ChefHatIcon} {
    color: ${({ theme }) => theme.color.white};
    stroke-opacity: 1;
    transform: scale(1.1);
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
  left: -6px;
  min-width: 140px;
  opacity: 0;
  transform: scaleY(0);
  background-color: transparent;
  transform-origin: top;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  z-index: 1;

  ${DropdownWrapper}:hover & {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: auto;
  }
`;

export const DropdownItem = styled(Link)`
  display: block;
  padding: 12px;
  font-size: 20px;
  color: ${({ theme }) => theme.color.greenHaze};
  text-decoration: none;
  transition: background 0.2s;
  background-color: ${({ theme }) => theme.color.white};
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.fruitSalad};
  }
`;

export const DropdownItemAsDiv = styled.div`
  position: relative;
  margin-top: 10px;
  padding: 12px;
  font-size: 20px;
  color: ${({ theme }) => theme.color.greenHaze};
  background-color: ${({ theme }) => theme.color.white};
  text-align: center;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.fruitSalad};
  }
`;

export const SubMenu = styled.ul`
  position: absolute;
  list-style-type: none;
  top: 0;
  left: 100%;
  padding: 0;
  margin: 0;
  min-width: 140px;
  background-color: white;
  display: none;
  z-index: 2;

  ${DropdownItemAsDiv}:hover & {
    display: block;
  }
`;
