import Navigation from "../../features/Navigation";
import { useGetRecipes } from "../../useGetRecipes";
import {
  RecipesImageCont,
  RecipesList,
  RecipesWrapper,
} from "../AllRecipes/styled";
import { ErrorPage } from "../ErrorPage";
import Footer from "../Footer";
import { LoadingPage } from "../LoadingPage";
import { Image, ImageName } from "../Main/LatestRecipes/styled";
import { ListItem } from "../Main/PopularPicks/styled";
import { mealType } from "./mealTypeData";

export const Categories = () => {
  const allRecipes = useGetRecipes();

  return (
    <>
      {allRecipes.status === "loading" ? (
        <LoadingPage />
      ) : allRecipes.status === "error" ? (
        <ErrorPage />
      ) : (
        <>
          <Navigation />
          <RecipesWrapper>
            <RecipesList>
              {mealType.map(({ name, image }) => (
                <ListItem key={name}>
                  <RecipesImageCont>
                    <Image src={image} alt="food image" />
                    <ImageName> {name}</ImageName>
                  </RecipesImageCont>
                </ListItem>
              ))}
            </RecipesList>
          </RecipesWrapper>
          <Footer />
        </>
      )}
    </>
  );
};
