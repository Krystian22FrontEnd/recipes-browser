import styled from "styled-components";

export const Nav = styled.nav`
  margin: 0 auto;
  max-width: 1216px;
  border-bottom: 1px solid darkblue;
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

  &:first-child {
    margin-right: auto;
  }
`;

export const SiteName = styled(ListItem)`
  font-size: 25px;
  font-weight: 700;
`;

