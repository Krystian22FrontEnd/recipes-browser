import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  background-color: ${({ theme }) => theme.color.concrete};
  margin-top: 20px;
  height: 168px;
`;

export const Address = styled.address``;

export const Header4 = styled.h4`
  font-size: 18px;
  margin: 0;
  padding-bottom: 16px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const EmailLink = styled.a`
  font-size: 24px;
  text-decoration: none;
  font-style: unset;
  color: ${({ theme }) => theme.color.woodSmoke};

  &:hover {
    transition: 0.3s;
    color: ${({ theme }) => theme.color.greenHaze};
    cursor: pointer;
  }
`;
