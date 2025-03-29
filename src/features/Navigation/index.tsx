import { SearchBar } from "../SearchBar";
import { Nav, List, ListItem, SiteName } from "./styled";

const Navigation = () => {
  return (
    <Nav>
      <List>
        <SiteName>
          <a>Recipes browser</a>
        </SiteName>
        <ListItem>
          <a>Recipes</a>
        </ListItem>
        <ListItem>
          <a>Categories</a>
        </ListItem>
        <ListItem>
          <a>Main page</a>
        </ListItem>
        <ListItem>
          <a>About</a>
        </ListItem>
      </List>
      <SearchBar />
    </Nav>
  );
};

export default Navigation;
