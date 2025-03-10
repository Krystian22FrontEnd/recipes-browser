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
import Szama from "../../../images/Szama1.jpg";
import Szama2 from "../../../images/Szama2.jpg";

export const LatestRecipes = () => {
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
          <ListItem>
            <ImageCont>
              <Image src={Szama} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageCont>
          </ListItem>
          <ListItem>
            <ImageCont>
              <Image src={Szama2} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageCont>
          </ListItem>
          <StyledArrow />
        </List>
      </Wrapper>
    </>
  );
};
