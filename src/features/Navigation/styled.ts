import styled from "styled-components";
import background from "../../images/background.jpg";

export const Nav = styled.nav`
  margin: 0 auto;
  height: 50vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  box-shadow: inset 0px 50px 80px 0px ${({ theme }) => theme.color.woodSmoke};
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 32px;
`;

export const ListItem = styled.li`
  list-style-type: none;
  margin-right: 32px;
  font-size: 20px;
  color: ${({ theme }) => theme.color.white};

  &:first-child {
    margin-right: auto;
  }
`;

export const SiteName = styled(ListItem)`
  font-size: 25px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
`;
