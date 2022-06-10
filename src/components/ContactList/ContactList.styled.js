import styled from "styled-components";
import { theme } from "../../constants/theme";

const {
  spacing,
  colors: { accentColor },
  timing,
  timingFunction,
} = theme;

export const ContactsList = styled.ul`
  padding-left: 0;
  list-style: none;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(8, 8, 114, 0.5);
  padding-bottom: 8px;
  &:not(:last-child) {
    margin-bottom: ${spacing(4)};
  }
`;

export const ContactNote = styled.p`
  margin-right: ${spacing(3)};
  font-size: 0.85em;
`;

export const ContactNoteItem = styled.span`
  display: inline-block;
`;

export const Link = styled.a`
  margin-left: ${spacing(1)};
  color: inherit;
  text-decoration: none;
  font-weight: 700;
  transition: text-decoration ${timing}, ${timingFunction};
  &:hover,
  &:focus {
    color: inherit;
    outline: 2px solid ${accentColor};
    border-radius: 0.3em;
    outline-offset: 0.3em;
  }
`;
