import Navigation from "../../features/Navigation";
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
import { useGetRecipes } from "../../useGetRecipes";
import { useParams } from "react-router";

export const HowToMake = () => {
    const {name} = useParams()

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
              {allRecipes.data.map(({ name, image, ingredients, instructions }) => (
                <ListItem key={name}>
                    <RecipesImageCont>
                      <Image src={image} alt="food image" />
                      <ImageName> {name}</ImageName>
                    </RecipesImageCont>
                    <p>{ingredients}</p>
                    <p>{instructions}</p>
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
