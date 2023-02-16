import styled from "styled-components";
import { colors } from "../../ui-tokens/colors";
import { spacings } from "../../ui-tokens/spacings";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 300px;
  word-break: break-all;
  border: 2px solid ${colors.white};
  border-radius: 5px;
  padding: ${spacings.x2}px;
  transition: all 0.3s ease-in-out;
  margin: ${spacings.x2}px;
  &:hover {
    border: 2px solid ${colors.green};
  }
`;

export { CardContainer };
