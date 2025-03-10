import { Header2, Image, ImageCont, ImageName } from "../LatestRecipes/styled";
import { StyledParagraph, Wrapper, List, ListItem } from "./styled";
import szama from "../../../images/Szama1.jpg";
import szama2 from "../../../images/Szama2.jpg";

export const OverallRecipes = () => {
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
            <ImageCont>
              <Image src={szama} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageCont>
          </ListItem>
          <ListItem>
            <ImageCont>
              <Image src={szama2} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageCont>
          </ListItem>
          <ListItem>
            <ImageCont>
              <Image src={szama} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageCont>
          </ListItem>
          <ListItem>
            <ImageCont>
              <Image src={szama2} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageCont>
          </ListItem>
          <ListItem>
            <ImageCont>
              <Image src={szama} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageCont>
          </ListItem>
          <ListItem>
            <ImageCont>
              <Image src={szama2} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageCont>
          </ListItem>
          <ListItem>
            <ImageCont>
              <Image src={szama} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageCont>
          </ListItem>
          <ListItem>
            <ImageCont>
              <Image src={szama2} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageCont>
          </ListItem>
          <ListItem>
            <ImageCont>
              <Image src={szama} alt="Example image" />
              <ImageName>Example Name</ImageName>
            </ImageCont>
          </ListItem>
        </List>
      </Wrapper>
    </>
  );
};
