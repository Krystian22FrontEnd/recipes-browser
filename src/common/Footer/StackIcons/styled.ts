import { FC, SVGProps } from "react";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  margin: 0;
  list-style-type: none;
  padding-left: 0;
`;

export const styleIcon = (Icon: FC<SVGProps<SVGSVGElement>>) => styled(Icon)`
  height: auto;
  width: 48px;

  &:hover {
    animation-name: rotate;
    animation-duration: 1s;

    @keyframes rotate {
      100% {
        transform: scale(1.2) rotate(360deg);
      }
    }
  }
`;
