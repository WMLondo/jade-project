import { Button } from "../StandardButton/StandardButton.styles";
import styled from "styled-components";

export const DangerButton = styled(Button)`
  background: var(--danger-color-linear-gradient-500-to-400-transform-180);
  :hover {
    background: var(--danger-color-500);
  }
  :active {
    background: var(--danger-color-600);
  }
  :disabled {
    background: var(--danger-color-disabled);
  }
`;
