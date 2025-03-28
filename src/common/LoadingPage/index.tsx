import { Paragraph, Wrapper } from "../ErrorPage/styled";
import { ChefIcon } from "./styled";

export const LoadingPage = () => {
  return (
    <Wrapper>
      <Paragraph>Przygotowuje przepisy</Paragraph>
      <ChefIcon/>
    </Wrapper>
  );
};
