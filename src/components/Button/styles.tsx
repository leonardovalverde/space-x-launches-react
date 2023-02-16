import styled from "styled-components";
import { colors } from "../../ui-tokens/colors";
import { spacings } from "../../ui-tokens/spacings";

const StyledButton = styled.button<{
  padding?: number;
  variant: "primary" | "secondary";
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
}>`
  cursor: pointer;
  padding: ${(props) => props.padding || spacings.x2}px;
  margin-top: ${(props) => props.mt || spacings.x0}px;
  margin-bottom: ${(props) => props.mb || spacings.x0}px;
  margin-right: ${(props) => props.mr || spacings.x0}px;
  margin-left: ${(props) => props.ml || spacings.x0}px;
  transition: all 0.3s ease-in-out;
  ${(props) => {
    if (props.variant === "primary") {
      return `
                border: 1px solid ${colors.white};
                color: ${colors.white};
                border-radius: 5px;

                &:hover {
                    background-color: ${colors.white};
                    color: ${colors.secondary};
                }
            `;
    }
    if (props.variant === "secondary") {
      return `
                border: 1px solid ${colors.green};
                color: ${colors.green};
                border-radius: 5px;

                &:hover {
                    background-color: ${colors.green};
                    color: ${colors.secondary};
                }
            `;
    }
  }}
`;

export { StyledButton };
