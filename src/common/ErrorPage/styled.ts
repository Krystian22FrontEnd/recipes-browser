import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../icons/errorIcon.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15rem 0;
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: clamp(1rem, 2vw, 2rem);
  margin: 0;
`;

export const StyledErrorIcon = styled(ErrorIcon)`
  height: clamp(5rem, 10vw, 10rem);
  margin-bottom: 2rem;
`;
