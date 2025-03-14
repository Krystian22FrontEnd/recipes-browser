import { FC, SVGProps } from "react";
import styled from "styled-components";

export const styleIcon = (Icon: FC<SVGProps<SVGSVGElement>>) => styled(Icon)`
height: auto;
width: 48px;
`