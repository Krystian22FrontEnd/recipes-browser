import styled from "styled-components";

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
  margin-right: 20px;
  font-size: 25px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
`;

export const ListItem = styled.li`
  margin-right: 20px;
  list-style-type: none;
`;

export const ImageCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Image = styled.img`
  width: 300px;
  height: 200px;
  position: relative;
`;

export const ImageName = styled.p`
  margin: 0;
  position: absolute;
  z-index: 1;
  color: white;
  padding: 0 0 10px 10px;
`;
