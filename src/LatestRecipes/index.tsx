import {
  Header3,
  Image,
  ImageCont,
  ImageName,
  List,
  ListItem,
  StyledParagraph,
  TextWrapper,
  Wrapper,
} from "./styled";
import Szama from "../images/Szama1.jpg";
import Szama2 from "../images/Szama2.jpg";

const LatestRecipes = () => {
  return (
    <>
      <Wrapper>
        <TextWrapper>
          <Header3>Latest recipes</Header3>
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
        </List>
      </Wrapper>
    </>
  );
};

export default LatestRecipes;
