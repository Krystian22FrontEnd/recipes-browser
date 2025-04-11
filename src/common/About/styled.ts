import styled from "styled-components";
import authorBackground from "../../images/authorBackground.jpg";

export const BackgroundImage = styled.div`
  height: 100vh;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${authorBackground});
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: -1;
    filter: blur(5px);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60vw;
  margin: auto;
  padding: 2rem;
  border-radius: 5px;
`;

export const Header2 = styled.h2`
  font-size: 3rem;
  padding: 6rem 0 0;
  margin: 0;
  padding-bottom: 2rem;
  color: ${({ theme }) => theme.color.greenHaze};
  text-align: center;
`;

export const Header3 = styled.h3`
  font-size: 2rem;
  align-self: flex-start;
  color: ${({ theme }) => theme.color.greenHaze};
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  margin: 0;
  line-height: 1.5;
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.fruitSalad};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.greenHaze};
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.color.fruitSalad};
  }
`;
