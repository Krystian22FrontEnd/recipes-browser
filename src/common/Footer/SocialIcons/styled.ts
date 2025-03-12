import { FC, SVGProps } from "react";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  margin: 0;
  list-style-type: none;
  margin-top: 16px;
  padding-left: 0;
`;

export const ListItem = styled.li``;

export const SocialsLinks = styled.a`
  margin-right: 24px;
`;

export const styleIcon = (Icon: FC<SVGProps<SVGSVGElement>>) => styled(Icon)`
  height: auto;
  color: black;

  &:hover {
    transition: 0.3s;
    color: green;
    cursor: pointer;
  }
`;
