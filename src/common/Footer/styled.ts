import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  padding-top: 1.25rem;
  background-color: ${({ theme }) => theme.color.concrete};
  margin-top: 1.25rem;
  height: clamp(10rem, 10vw, 10rem);
`;

export const Address = styled.address``;

export const Header4 = styled.h4`
  font-size: clamp(0.75rem, 2vw, 1.25rem);
  margin: 0;
  padding-bottom: 1rem;
`;

export const Link = styled.a`
  font-size: clamp(0.5rem, 2vw, 1.25rem);
  margin: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.color.woodSmoke};

  &:hover {
    transition: 0.3s;
    color: ${({ theme }) => theme.color.greenHaze};
    cursor: pointer;
  }
`;

export const EmailLink = styled(Link)`
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-style: unset;
`;
