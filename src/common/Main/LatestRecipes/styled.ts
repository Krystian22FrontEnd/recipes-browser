import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../icons/right-arrow.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: clamp(16rem, 30vw, 29rem);
  background-color: ${({ theme }) => theme.color.greenHaze};
  margin-top: 1.25rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledParagraph = styled.p`
  margin: 0;
  padding: 0 1rem;
`;

export const Header2 = styled.h2`
  margin: 0;
  padding: 0 1rem 1rem 1rem;
  font-size: clamp(1.5rem, 2vw, 2.25rem);
  color: ${({ theme }) => theme.color.concrete};
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding-left: 0;
`;

export const ListItem = styled.li`
  margin-right: 3rem;
  list-style-type: none;

  &:hover {
    cursor: pointer;
  }
`;

export const ImageCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: clamp(8rem, 15vw, 16.8rem);
  height: clamp(12rem, 20vw, 22rem);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0);
    transition: background 0.2s ease-in-out;
  }

  &:hover::before {
    background: rgba(255, 255, 255, 0.4);
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
  height: clamp(3rem, 6vw, 6rem);
  margin-left: -3rem;
  color: ${({ theme }) => theme.color.concrete};
`;

export const ImageName = styled.p`
  margin: 0;
  position: absolute;
  z-index: 1;
  color: ${({ theme }) => theme.color.white};
  padding: 0 0 0.6rem 0.6rem;
  font-size: clamp(0.5rem, 2vw, 1.5rem);
`;
