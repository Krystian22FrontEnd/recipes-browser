import { Paragraph, StyledErrorIcon, Wrapper } from "./styled";

export const ErrorPage = () => {
  return (
    <Wrapper>
      <Paragraph>
        <StyledErrorIcon />
      </Paragraph>
      <Paragraph>Nie udało się załadować przepisów 😢</Paragraph>
    </Wrapper>
  );
};
