import { useGetFullRecipesList } from "../../useGetFullRecipesList";
import { ErrorPage } from "../ErrorPage";
import { LoadingPage } from "../LoadingPage";
import { Image, ImageName } from "../Main/LatestRecipes/styled";
import {
  ExtraInfo,
  ListItem,
  PrepTime,
  ReviewCount,
  Span,
  StyledPrepTimeIcon,
  StyledStarIcon,
} from "../Main/PopularPicks/styled";
import { RecipesImageCont, RecipesList, RecipesWrapper } from "./styled";

export const AllRecipes = () => {
  const allRecipes = useGetFullRecipesList();

  return (
    <>
      {allRecipes.status === "loading" ? (
        <LoadingPage />
      ) : allRecipes.status === "error" ? (
        <ErrorPage />
      ) : (
        <RecipesWrapper>
          <RecipesList>
            {allRecipes.data.map(
              ({ id, name, image, rating, reviewCount, prepTimeMinutes }) => (
                <ListItem key={id}>
                  <RecipesImageCont>
                    <Image src={image} alt="food image" />
                    <ImageName> {name}</ImageName>
                  </RecipesImageCont>
                  <ExtraInfo>
                    <ReviewCount>
                      <StyledStarIcon />
                      <Span>{rating}</Span> ({reviewCount}) reviews
                    </ReviewCount>
                    <PrepTime>
                      <StyledPrepTimeIcon /> 00:{prepTimeMinutes}
                    </PrepTime>
                  </ExtraInfo>
                </ListItem>
              )
            )}
          </RecipesList>
        </RecipesWrapper>
      )}
    </>
  );
};
