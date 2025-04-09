import { Image, ImageName } from "../LatestRecipes/styled";
import {
  StyledParagraph,
  Wrapper,
  List,
  ListItem,
  StyledButtonArrow,
  ImageContBigger,
  Header2,
  ExtraInfo,
  ExtraInfoItem,
  StyledStarIcon,
  StyledPrepTimeIcon,
  Span,
  ButtonLink,
} from "./styled";
import { useGetRecipes } from "../../../useGetRecipes";
import { RecipeLink } from "../../../styledRouter";

export const PopularPicks = () => {
  const recipes = useGetRecipes();
  console.log(recipes);

  return (
    <>
      <Wrapper>
        <Header2>Popular Choices</Header2>
        <StyledParagraph>
        Not sure where to start? These recipes are fan favorites — maybe you'll find your new go-to dish!
        </StyledParagraph>
        <List>
          {recipes.data.map(
            ({ id, name, image, rating, reviewCount, prepTimeMinutes }) => (
              <ListItem key={id}>
                <RecipeLink to={`/${id}`}>
                  <ImageContBigger>
                    <Image src={image} alt="food image" />
                    <ImageName> {name}</ImageName>
                  </ImageContBigger>
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
        </List>
        <ButtonLink to={"/allRecipes"}>
          SEE MORE <StyledButtonArrow />
        </ButtonLink>
      </Wrapper>
    </>
  );
};
