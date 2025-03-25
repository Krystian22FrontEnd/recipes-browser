import { Image, ImageName } from "../LatestRecipes/styled";
import {
  StyledParagraph,
  Wrapper,
  List,
  ListItem,
  Button,
  StyledButtonArrow,
  ImageContBigger,
  Header2,
  ExtraInfo,
  StyledStarIcon,
  StyledPrepTimeIcon,
  PrepTime,
  ReviewCount,
  Span,
} from "./styled";
import { useGetPopularRecipes } from "../../../useGetPopularRecipes";

export const PopularPicks = () => {
  const recipes = useGetPopularRecipes();
  console.log(recipes);
  return (
    <>
      <Wrapper>
        <Header2>Popular Choices</Header2>
        <StyledParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          repellendus culpa excepturi minus dicta. Quaerat inventore architecto
          sunt maxime commodi libero? Expedita, inventore obcaecati repellendus
          sequi non temporibus et. Consequuntur!
        </StyledParagraph>
        <List>
          {recipes.data.map(
            ({ id, name, image, rating, reviewCount, prepTimeMinutes }) => (
              <ListItem key={id}>
                <ImageContBigger>
                  <Image src={image} alt="food image" />
                  <ImageName> {name}</ImageName>
                </ImageContBigger>
                <ExtraInfo>
                  <ReviewCount><StyledStarIcon/><Span>{rating}</Span> ({reviewCount}) reviews</ReviewCount>
                  <PrepTime>
                    <StyledPrepTimeIcon /> 00:{prepTimeMinutes}
                  </PrepTime>
                </ExtraInfo>
              </ListItem>
            )
          )}
        </List>
        <Button>
          SEE MORE
          <StyledButtonArrow />
        </Button>
      </Wrapper>
    </>
  );
};
