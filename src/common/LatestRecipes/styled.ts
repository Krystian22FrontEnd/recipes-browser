import styled from "styled-components";
import { ReactComponent as Arrow } from "../../icons/right-arrow-svgrepo-com.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledParagraph = styled.p`
  margin: 0;
`;

export const Header3 = styled.h3`
  margin: 0;
  padding-bottom: 15px;
  font-size: 35px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-right: 48px;
  list-style-type: none;
`;

export const ImageCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Image = styled.img`
  width: 500px;
  height: 350px;
  position: relative;
  object-fit: cover;
`;

export const StyledArrow = styled(Arrow)`
  display: flex;
  align-self: center;
  height: 96px;
  margin-left: -48px;
`;

export const ImageName = styled.p`
  margin: 0;
  position: absolute;
  z-index: 1;
  color: ${({ theme }) => theme.color.white};
  padding: 0 0 10px 10px;
  font-size: 24px;
`;
