import { Nav, List, ListItem, SiteName } from "./styled"

const Navigation = () => {
return (
    <Nav>
  <List>
    <SiteName>Site name</SiteName>
    <ListItem>Main page</ListItem>
    <ListItem>About Author</ListItem>
  </List>
</Nav>
)
}

export default Navigation