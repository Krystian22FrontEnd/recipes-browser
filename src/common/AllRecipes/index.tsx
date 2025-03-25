import { useGetFullRecipesList } from "../../useGetFullRecipesList";
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
      <RecipesWrapper>
        <RecipesList>
          {allRecipes.data.map(
            ({ id, name, image, rating, reviewCount, prepTimeMinutes }) => (
              <ListItem key={id}>
                <RecipesImageCont>
                  <Image src={image} alt="Example image" />
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
    </>
  );
};
