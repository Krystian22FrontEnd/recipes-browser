import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../icons/errorIcon.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 250px 0;
`;

export const Paragraph = styled.p`
text-align: center;
font-size: 28px;
`

export const StyledErrorIcon = styled(ErrorIcon)`
  height: 150px;
`;
