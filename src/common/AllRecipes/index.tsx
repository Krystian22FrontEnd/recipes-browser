import Navigation from "../../features/Navigation";
import { useGetRecipes } from "../../useGetRecipes";
import { ErrorPage } from "../ErrorPage";
import Footer from "../Footer";
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
import { RecipeLink } from "../../styledRouter";

export const AllRecipes = () => {
  const allRecipes = useGetRecipes();
  console.log(allRecipes.data);

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
              {allRecipes.data.map(
                ({ id, name, image, rating, reviewCount, prepTimeMinutes }) => (
                  <ListItem key={id}>
                    <RecipeLink to={`/${id}`}>
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
