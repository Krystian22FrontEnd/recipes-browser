import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #dcdcdc;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0;
  padding: 2rem;
`;

export const ListItem = styled.li`
  list-style-type: none;
  margin-right: 2rem;

  &:first-child {
    margin-right: auto;
  }
`;

export const SiteName = styled(ListItem)`
font-size: 25px;
`
