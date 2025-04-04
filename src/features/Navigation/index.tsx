import { SearchBar } from "../SearchBar";
import {
  Nav,
  List,
  ListItem,
  SiteName,
  NaviLink,
  CategoriesLink,
  DropdownWrapper,
  DropdownContent,
  DropdownItem,
  ChefHatIcon,
  SiteNameLink,
} from "./styled";

const Navigation = () => {
  return (
    <Nav>
      <List>
        <SiteName>
          <SiteNameLink to={"/"} title="Recipe browser's main page">
            <ChefHatIcon />
            Recipes browser
          </SiteNameLink>
        </SiteName>
        <ListItem>
          <NaviLink to={"/allRecipes"}>Recipes</NaviLink>
        </ListItem>
        <ListItem>
          <DropdownWrapper>
            <CategoriesLink to={"/categories"}>Categories</CategoriesLink>
            <DropdownContent>
              <DropdownItem to={"/category/italian"}>Italian</DropdownItem>
              <DropdownItem to={"/category/pakistani"}>Pakistani</DropdownItem>
              <DropdownItem to="/recipes/japanese">Oriental</DropdownItem>
            </DropdownContent>
          </DropdownWrapper>
        </ListItem>
        <ListItem>
          <NaviLink to={"/"}>About</NaviLink>
        </ListItem>
      </List>
      <SearchBar />
    </Nav>
  );
};

export default Navigation;
