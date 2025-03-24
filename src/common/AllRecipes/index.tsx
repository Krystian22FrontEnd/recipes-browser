import { useGetFullRecipesList } from "../../useGetFullRecipesList";
import { Image, ImageName } from "../Main/LatestRecipes/styled";
import {
  ListItem,
} from "../Main/PopularPicks/styled";
import { RecipesImageCont, RecipesList, RecipesWrapper } from "./styled";

export const AllRecipes = () => {
  const allRecipes = useGetFullRecipesList();

  return (
    <>
      <RecipesWrapper>
        <RecipesList>
          {allRecipes.data.map(({ id, name, image }) => (
            <ListItem key={id}>
              <RecipesImageCont>
                <Image src={image} alt="Example image" />
                <ImageName> {name}</ImageName>
              </RecipesImageCont>
            </ListItem>
          ))}
        </RecipesList>
      </RecipesWrapper>
    </>
  );
};
