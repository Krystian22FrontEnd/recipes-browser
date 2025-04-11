import styled from "styled-components";
import { ReactComponent as ChefIco } from "../../icons/chefIcon.svg";

export const ChefIcon = styled(ChefIco)`
  animation-name: loader;
  animation-duration: 1.8s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  height: 10rem;
  margin-top: 2rem;

  @keyframes loader {
    0% {
      transform: translateX(-300px);
    }

    25% {
      transform: rotate(30deg);
    }

    50% {
      transform: rotate(-30deg);
    }

    100% {
      transform: translateX(300px) rotate(30deg);
    }
  }
`;
