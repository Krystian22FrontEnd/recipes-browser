import styled from "styled-components";
import { ReactComponent as ButtonArrow } from "../../../icons/ButtonRightArrow.svg";
import { ImageCont } from "../LatestRecipes/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  border-bottom: 3px solid ${({theme}) => theme.color.greenHaze};
  max-width: 1360px;
  padding-bottom: 20px;
`;

export const Header2 = styled.h2`
  font-size: 35px;
  padding-bottom: 24px;
  margin: 0;
  text-align: center;
`;

export const StyledParagraph = styled.p`
  text-align: center;
  margin: 0;
`;

export const List = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 0;
`;

export const ListItem = styled.li`
  list-style-type: none;
`;

export const ImageContBigger = styled(ImageCont)`
  width: 438px;
  height: auto;
`;

export const Button = styled.button`
  display: flex;
  align-items: end;
  padding: 16px 24px;
  margin-top: 30px;
  border: none;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.fruitSalad};
  color: ${({ theme }) => theme.color.white};
`;

export const StyledButtonArrow = styled(ButtonArrow)`
  height: 22px;
  padding-left: 10px;
`;
