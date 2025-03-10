import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const StyledParagraph = styled.p`
max-width: 1216px;
text-align: center;
`

export const List = styled.ul`
display: grid;
gap: 20px;
grid-template-columns: 1fr 1fr 1fr; 
`

export const ListItem = styled.li`
list-style-type: none;
`