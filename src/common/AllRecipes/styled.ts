import styled from "styled-components";
import { Wrapper, ImageContBigger } from "../Main/PopularPicks/styled";

export const RecipesWrapper = styled(Wrapper)`
  border: none;
`;

export const RecipesList = styled.ul`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 0;
`;

export const RecipesImageCont = styled(ImageContBigger)`
  width: 100%;
  height: auto;
`;
