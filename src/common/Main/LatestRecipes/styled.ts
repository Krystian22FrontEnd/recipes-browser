import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../icons/right-arrow.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 460px;
  background-color: ${({ theme }) => theme.color.greenHaze};
  margin-top: 20px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledParagraph = styled.p`
  margin: 0;
`;

export const Header2 = styled.h2`
  margin: 0;
  padding-bottom: 16px;
  font-size: 35px;
  color: ${({ theme }) => theme.color.concrete};
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding-left: 0;
`;

export const ListItem = styled.li`
  margin-right: 48px;
  list-style-type: none;
`;

export const ImageCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 270px;
  height: 350px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 2px 2px 10px white;
`;

export const StyledArrow = styled(Arrow)`
  display: flex;
  align-self: center;
  height: 96px;
  margin-left: -48px;
  color: ${({ theme }) => theme.color.concrete};
`;

export const ImageName = styled.p`
  margin: 0;
  position: absolute;
  z-index: 1;
  color: ${({ theme }) => theme.color.white};
  padding: 0 0 10px 10px;
  font-size: 24px;
`;
