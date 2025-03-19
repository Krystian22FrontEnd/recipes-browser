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
} from "./styled";
import szama from "../../../images/Szama1.jpg";
import szama2 from "../../../images/Szama2.jpg";
import { useGetRecipes } from "../../../getRecipes";

export const OverallRecipes = () => {
const recipes = useGetRecipes();
console.log(recipes)
  return (
    <>
      <Wrapper>
        <Header2>Recipes(Popular?)</Header2>
        <StyledParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          repellendus culpa excepturi minus dicta. Quaerat inventore architecto
          sunt maxime commodi libero? Expedita, inventore obcaecati repellendus
          sequi non temporibus et. Consequuntur!
        </StyledParagraph>
        <List>
          <ListItem>
            <ImageContBigger>
              <Image src={szama} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageContBigger>
          </ListItem>
          <ListItem>
            <ImageContBigger>
              <Image src={szama2} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageContBigger>
          </ListItem>
          <ListItem>
            <ImageContBigger>
              <Image src={szama} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageContBigger>
          </ListItem>
          <ListItem>
            <ImageContBigger>
              <Image src={szama2} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageContBigger>
          </ListItem>
          <ListItem>
            <ImageContBigger>
              <Image src={szama} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageContBigger>
          </ListItem>
          <ListItem>
            <ImageContBigger>
              <Image src={szama2} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageContBigger>
          </ListItem>
          <ListItem>
            <ImageContBigger>
              <Image src={szama} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageContBigger>
          </ListItem>
          <ListItem>
            <ImageContBigger>
              <Image src={szama2} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageContBigger>
          </ListItem>
          <ListItem>
            <ImageContBigger>
              <Image src={szama} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageContBigger>
          </ListItem>
        </List>
        <Button>
          SEE MORE
          <StyledButtonArrow />
        </Button>
      </Wrapper>
    </>
  );
};
