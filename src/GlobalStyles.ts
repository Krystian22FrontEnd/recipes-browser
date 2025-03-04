import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: inherit;
}

body {
  font-family: "Inter", serif;
  background-color: ${({theme}) => theme.color.white};
}
`;
