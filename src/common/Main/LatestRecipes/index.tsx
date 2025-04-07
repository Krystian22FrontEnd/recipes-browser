import { useGetLatestRecipes } from "../../../useGetLatestRecipes";
import {
  Header2,
  Image,
  ImageCont,
  ImageName,
  List,
  ListItem,
  StyledArrow,
  StyledParagraph,
  TextWrapper,
  Wrapper,
} from "./styled";
import { RecipeLink } from "../../../styledRouter";

export const LatestRecipes = () => {
  const recipes = useGetLatestRecipes();

  return (
    <>
      <Wrapper>
        <TextWrapper>
          <Header2>Latest recipes</Header2>
          <StyledParagraph>
            Take a look at recently added recipes.
          </StyledParagraph>
        </TextWrapper>
        <List>
          {recipes.data.map(({ id, name, image }) => (
            <ListItem key={id}>
              <RecipeLink to={`/${id}`}>
                <ImageCont>
                  <Image src={image} alt="food image" />
                  <ImageName>{name}</ImageName>
                </ImageCont>
              </RecipeLink>
            </ListItem>
          ))}
          <StyledArrow />
        </List>
      </Wrapper>
    </>
  );
};
