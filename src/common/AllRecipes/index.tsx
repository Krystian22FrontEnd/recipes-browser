import Navigation from "../../features/Navigation";
import { useGetRecipes } from "../../useGetRecipes";
import { ErrorPage } from "../ErrorPage";
import Footer from "../Footer";
import { LoadingPage } from "../LoadingPage";
import { Image, ImageName } from "../Main/LatestRecipes/styled";
import {
  ExtraInfo,
  ExtraInfoItem,
  ListItem,
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
