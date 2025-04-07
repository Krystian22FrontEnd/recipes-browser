import Navigation from "../../features/Navigation";
import { ErrorPage } from "../ErrorPage";
import Footer from "../Footer";
import { LoadingPage } from "../LoadingPage";
import { useGetRecipes } from "../../useGetRecipes";
import { useParams } from "react-router";
import {
  Background,
  BackgroundImage,
  Header3,
  ImageCont,
  List,
  ListItem,
  ListItemNum,
  RecipeImage,
  RecipeName,
  RecipeWrapper,
  SecondHeader3,
  Wrapper,
} from "./styled";
import { useEffect } from "react";

export const RecipeDetails = () => {
  const allRecipes = useGetRecipes();
  const { id } = useParams<{ id: string }>();

  const recipe = allRecipes.data.find(
    ({ id: recipeId }) => String(recipeId) === id
  );
  useEffect(() => {
    return document
      .getElementById("recipe")
      ?.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <>
      {allRecipes.status === "loading" ? (
        <LoadingPage />
      ) : allRecipes.status === "error" ? (
        <ErrorPage />
      ) : (
        <>
          <Navigation />
          <BackgroundImage imageurl={recipe?.image}>
            <Background>
              <RecipeName id="recipe"> {recipe?.name}</RecipeName>
            </Background>
            <RecipeWrapper>
              <Wrapper key={recipe?.id}>
                <ImageCont>
                  <RecipeImage src={recipe?.image} alt="food image" />
                </ImageCont>
              </Wrapper>
            </RecipeWrapper>
            <Background>
              <Header3>Instructions:</Header3>
              <List>
                {recipe?.instructions.map((instruction, index) => (
                  <ListItemNum key={index}>{instruction}</ListItemNum>
                ))}
              </List>
              <SecondHeader3>Ingredients:</SecondHeader3>
              <List>
                {recipe?.ingredients.map((ingredient, index) => (
                  <ListItem key={index}>{ingredient}</ListItem>
                ))}
              </List>
            </Background>
          </BackgroundImage>
          <Footer />
        </>
      )}
    </>
  );
};
