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

export const Link = styled.a`
  font-size: 18px;
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
  font-size: 24px;
  font-style: unset;
`;
