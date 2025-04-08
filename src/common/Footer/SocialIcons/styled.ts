import { FC, SVGProps } from "react";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  margin: 0;
  list-style-type: none;
  margin-top: 1rem;
  padding-left: 0;
`;

export const SocialsLinks = styled.a`
  margin-right: 1.5rem;
`;

export const styleIcon = (Icon: FC<SVGProps<SVGSVGElement>>) => styled(Icon)`
  width: clamp(2rem, 4vw, 3rem);
  height: auto;
  color: ${({theme}) => theme.color.black};

  &:hover {
    transition: 0.3s;
    color: ${({theme}) => theme.color.greenHaze};
    cursor: pointer;
  }
`;
