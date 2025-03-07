import { Nav, List, ListItem, SiteName } from "./styled";

const Navigation = () => {
  //ZMIENIĆ FONT SITE NAME
  return (
    <Nav>
      <List>
        <SiteName>
          <a> Recipe browser</a>
        </SiteName>
        <ListItem>
          <a>Recipes</a>
        </ListItem>
        <ListItem>
          <a>Main page</a>
        </ListItem>
        <ListItem>
          <a>About</a>
        </ListItem>
      </List>
    </Nav>
  );
};

export default Navigation;
