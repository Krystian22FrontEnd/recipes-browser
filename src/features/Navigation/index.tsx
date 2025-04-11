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
  SubMenu,
  DropdownItemAsDiv,
} from "./styled";

const Navigation = () => {
  return (
    <Nav>
      <List>
        <SiteName>
          <SiteNameLink to="/" title="Recipe browser's main page">
            <ChefHatIcon />
            Recipes browser
          </SiteNameLink>
        </SiteName>
        <ListItem>
          <NaviLink to="/allRecipes">Recipes</NaviLink>
        </ListItem>
        <ListItem>
          <DropdownWrapper>
            <CategoriesLink to="/categories">Categories</CategoriesLink>
            <DropdownContent>
              <DropdownItemAsDiv>
                Cuisine
                <SubMenu>
                  <DropdownItem to="/category/asian">Asian</DropdownItem>
                  <DropdownItem to="/category/italian">Italian</DropdownItem>
                  <DropdownItem to="/category/greek">Greek</DropdownItem>
                  <DropdownItem to="/category/brazilian">
                    Brazilian
                  </DropdownItem>
                </SubMenu>
              </DropdownItemAsDiv>
              <DropdownItem to="/category/breakfast">Breakfast</DropdownItem>
              <DropdownItem to="/category/lunch">Lunch</DropdownItem>
              <DropdownItem to="/category/appetizer">Appetizer</DropdownItem>
              <DropdownItem to="/category/dinner">Dinner</DropdownItem>
              <DropdownItem to="/category/dessert">Dessert</DropdownItem>
              <DropdownItem to="/category/beverage">Beverage</DropdownItem>
            </DropdownContent>
          </DropdownWrapper>
        </ListItem>
        <ListItem>
  <NaviLink to={"/author"}>About(me)</NaviLink>
        </ListItem>
      </List>
      <SearchBar />
    </Nav>
  );
};

export default Navigation;
