import Navigation from "../../features/Navigation";
import { ErrorPage } from "../ErrorPage";
import Footer from "../Footer";
import { LoadingPage } from "../LoadingPage";
import { useGetRecipes } from "../../useGetRecipes";
import { useParams } from "react-router";
import {
  Background,
  BackgroundImage,
  ChefHatIcon2,
  CutleryIcon,
  DataSpan,
  FlagIcon,
  Header3,
  ImageCont,
  List,
  ListItem,
  ListItemNum,
  RecipeExtraInfo,
  RecipeExtraInfoItem,
  RecipeImage,
  RecipeName,
  RecipeWrapper,
  SecondHeader3,
  Span,
  StyledPrepTimeIconWhite,
  Wrapper,
} from "./styled";
import { useEffect } from "react";
import { RecipeLink } from "../../styledRouter";

export const RecipeDetails = () => {
  const allRecipes = useGetRecipes();
  const { id } = useParams<{ id: string }>();

  const recipe = allRecipes.data.find(
    ({ id: recipeId }) => String(recipeId) === id
  );

  const FindMealType = () => {
    const matchedMeal = recipe?.mealType?.find((type) => type);
    if (matchedMeal) {
      return (
        <RecipeLink to={`/category/${matchedMeal.toLowerCase()}`}>
          <DataSpan>{matchedMeal}</DataSpan>
        </RecipeLink>
      );
    }
  };

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
          <BackgroundImage $imageurl={recipe?.image}>
            <RecipeWrapper>
              <Wrapper key={recipe?.id}>
                <ImageCont id="recipe">
                  <RecipeImage src={recipe?.image} alt="food image" />
                </ImageCont>
              </Wrapper>
            </RecipeWrapper>
            <Background>
              <RecipeExtraInfo>
                <RecipeExtraInfoItem>
                  <FlagIcon />
                  <Span>Cuisine:</Span> <DataSpan>{recipe?.cuisine}</DataSpan>
                </RecipeExtraInfoItem>
                <RecipeExtraInfoItem>
                  <ChefHatIcon2 />
                  <Span>Difficulty:</Span>
                  <DataSpan>{recipe?.difficulty}</DataSpan>
                </RecipeExtraInfoItem>
                <RecipeExtraInfoItem>
                  <StyledPrepTimeIconWhite />
                  <Span>Prep. Time:</Span>
                  <DataSpan>00:{recipe?.prepTimeMinutes}</DataSpan>
                </RecipeExtraInfoItem>
                <RecipeExtraInfoItem>
                  <CutleryIcon />
                  <Span>Servings:</Span> <DataSpan>{recipe?.servings}</DataSpan>
                </RecipeExtraInfoItem>
              </RecipeExtraInfo>
              <RecipeName>{recipe?.name}</RecipeName>
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
              <RecipeExtraInfo>
                <RecipeExtraInfoItem>
                  <Span>Calories per serving:</Span>
                  <DataSpan>{recipe?.caloriesPerServing}</DataSpan>
                </RecipeExtraInfoItem>
                <RecipeExtraInfoItem>
                  <Span>Meal type:</Span> {FindMealType()}
                </RecipeExtraInfoItem>
              </RecipeExtraInfo>
            </Background>
          </BackgroundImage>
          <Footer />
        </>
      )}
    </>
  );
};
