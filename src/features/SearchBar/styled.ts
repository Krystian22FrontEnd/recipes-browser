import styled from "styled-components";
import { ReactComponent as LoopIco } from "../../icons/loopIcon.svg";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

export const Input = styled.input`
  width: 700px;
  padding: 20px;
  border-radius: 15px;
  border: none;
  position: absolute;
`;

export const LoopIcon = styled(LoopIco)`
  height: 27px;
  position: relative;
  left: 320px;
  top: 16px;
`;
