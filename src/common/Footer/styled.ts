import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.color.lessGreen};
  margin-top: 50px;
  height: 20vh;
`;

export const Address = styled.address``;

export const Header4 = styled.h4`
  font-size: 24px;
  margin: 0;
  padding-bottom: 15px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const EmailLink = styled.a`
  font-size: 26px;
  text-decoration: none;
  font-style: unset;
  color: ${({ theme }) => theme.color.woodSmoke};

  &:hover {
    transition: 0.3s;
    color: green;
    cursor: pointer;
  }
`;
