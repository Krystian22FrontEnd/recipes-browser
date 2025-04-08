import { useLocation } from "react-router";
import Navigation from "../../../features/Navigation";
import { RecipeLink } from "../../../styledRouter";
import { useGetRecipes } from "../../../useGetRecipes";
import {
  RecipesImageCont,
  RecipesList,
  RecipesWrapper,
} from "../../AllRecipes/styled";
import { ErrorPage } from "../../ErrorPage";
import Footer from "../../Footer";
import { LoadingPage } from "../../LoadingPage";
import { Image, ImageName } from "../../Main/LatestRecipes/styled";
import {
  ExtraInfo,
  ExtraInfoItem,
  Header2,
  ListItem,
  Span,
  StyledPrepTimeIcon,
  StyledStarIcon,
} from "../../Main/PopularPicks/styled";

export const Cuisine = () => {
  const allRecipes = useGetRecipes();
  const location = useLocation()

  const findCuisine = () => {
    switch (location.pathname) {
      case "/category/asian":
        return "Cuisine: Asian"
    
    case "/category/italian":
        return "Cuisine: Italian"
    
    case "/category/greek":
        return "Cuisine: Greek"
    
        case "/category/brazilian":
        return "Cuisine: Brazilian"
      }
  }


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
            <Header2>{findCuisine()}</Header2>
            <RecipesList>
              {allRecipes.data.map(
                ({ id, name, image, rating, reviewCount, prepTimeMinutes }) => (
                  <ListItem key={id}>
                    <RecipeLink to={`/${id}`}>
                      <RecipesImageCont>
                        <Image src={image} alt="food image" />
                        <ImageName>{name}</ImageName>
                      </RecipesImageCont>
                      <ExtraInfo>
                        <ExtraInfoItem>
                          <StyledStarIcon />
                          <Span>{rating}</Span> ({reviewCount}) reviews
                        </ExtraInfoItem>
                        <ExtraInfoItem>
                          <StyledPrepTimeIcon /> 00:{prepTimeMinutes}
                        </ExtraInfoItem>
                      </ExtraInfo>
                    </RecipeLink>
                  </ListItem>
                )
              )}
            </RecipesList>
          </RecipesWrapper>
          <Footer />
        </>
      )}
    </>
  );
};
