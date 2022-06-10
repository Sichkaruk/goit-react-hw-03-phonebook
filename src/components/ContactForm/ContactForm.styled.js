import styled from "styled-components";
import { theme } from "../../constants/theme";

const {
  colors: {
    primaryColor,
    reverseColor,
    backgroundColorForm,
    outlineColor,
    borderDisabledColor,
    backgroundDisabledColor,
    disabledColor,
  },
  spacing,
  timing,
  timingFunction,
} = theme;

export const FormContacts = styled.form`
  width: 90%;
  margin-bottom: ${spacing(4)};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: ${spacing(4)};
  border: 1px solid ${primaryColor};
  border-radius: ${spacing(2)};
  background-color: ${backgroundColorForm}; ;
`;

export const Label = styled.label`
  margin-bottom: ${spacing(1)};
`;

export const Input = styled.input`
  padding: ${spacing(2)};
  margin-bottom: ${spacing(4)};
  border: none;
  border-radius: ${spacing(2)};
  transition: outline ${timing} ${timingFunction};
  &:hover,
  &:focus {
    outline: 2px solid ${outlineColor};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing(2)};
  border: none;
  border-radius: ${spacing(2)};
  color: inherit;
  white-space: nowrap;
  outline: 1px solid ${primaryColor};
  transition: color ${timing} ${timingFunction},
    background-color ${timing} ${timingFunction};
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${reverseColor};
    background-color: ${primaryColor};
  }
  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    border: 1px solid ${borderDisabledColor};
    background-color: ${backgroundDisabledColor};
    color: ${disabledColor};
  }
`;
