import { SearchBar } from "../SearchBar";
import { Nav, List, ListItem, SiteName, NaviLink } from "./styled";

const Navigation = () => {
  return (
    <Nav>
      <List>
        <SiteName>
          <NaviLink to={"/"} title="Recipe browser's main page">
            Recipes browser
          </NaviLink>
        </SiteName>
        <ListItem>
          <NaviLink to={"/allRecipes"}>Recipes</NaviLink>
        </ListItem>
        <ListItem>
          <a>Categories</a>
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
