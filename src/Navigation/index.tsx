import { Nav, List, ListItem, SiteName, Input, Form } from "./styled";

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
      <Form>
        <Input type="search" placeholder="Find what you like"/>
      </Form>
    </Nav>
  );
};

export default Navigation;
