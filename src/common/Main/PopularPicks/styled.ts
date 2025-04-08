import styled from "styled-components";
import { ReactComponent as ButtonArrow } from "../../../icons/ButtonRightArrow.svg";
import { ImageCont } from "../LatestRecipes/styled";
import { ReactComponent as PrepTimeIcon } from "../../../icons/prepTimeIcon.svg";
import { ReactComponent as StarIcon } from "../../../icons/starIcon.svg";
import { Link } from "react-router";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  border-bottom: 3px solid ${({ theme }) => theme.color.greenHaze};
  max-width: 71vw;
  padding-bottom: 1.25rem;
`;

export const Header2 = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  padding-bottom: 1.5rem;
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.color.greenHaze};
`;

export const StyledParagraph = styled.p`
  text-align: center;
  margin: 0 0 1.25rem;
  font-size: clamp(0.75rem, 2vw, 1.4rem);
  color: ${({ theme }) => theme.color.greenHaze};
`;

export const List = styled.ul`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 0;
`;

export const ListItem = styled.li`
  list-style-type: none;

  &:hover {
    cursor: pointer;
  }
`;

export const ImageContBigger = styled(ImageCont)`
  width: clamp(12rem, 23vw, 28rem);
  height: auto
`;

export const ExtraInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
  margin-top: 0.25rem;
`;

export const Span = styled.span`
  font-weight: 700;
  padding-right: 1rem;
  color: ${({ theme }) => theme.color.black};
`;

export const ExtraInfoItem = styled.span`
  display: flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.color.gray};
  font-size: 1.125rem;
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 1.55rem;
  height: 1.55rem;
  margin-right: 0.625rem;
`;

export const StyledPrepTimeIcon = styled(PrepTimeIcon)`
  width: 1.55rem;
  height: 1.55rem;
  margin-right: 0.625rem;
`;

export const StyledButtonArrow = styled(ButtonArrow)`
  height: 1.4rem;
  padding-left: 0.625rem;
  @keyframes arrowSlide {
    100% {
      transform: translateX(0.5rem) scale(1.1);
    }
  }
`;

export const ButtonLink = styled(Link)`
  display: flex;
  align-items: end;
  padding: 1rem 1.5rem;
  margin-top: 2rem;
  border: none;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.greenHaze};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  color: ${({ theme }) => theme.color.concrete};

  &:hover {
    background-color: ${({ theme }) => theme.color.fruitSalad};
    transition: 0.3s;
    & ${StyledButtonArrow} {
      animation: arrowSlide 0.4s ease-in-out forwards;
    }
  }
`;
