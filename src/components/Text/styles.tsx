import styled from "styled-components";
import { colors } from "../../ui-tokens/colors";
import { spacings } from "../../ui-tokens/spacings";

const StyledText = styled.p<{
  mb?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  padding?: number;
  color?: string;
  textAlign?: "center" | "left" | "right" | "justify";
}>`
  margin-bottom: ${(props) => props.mb || spacings.x0}px;
  margin-top: ${(props) => props.mt || spacings.x0}px;
  margin-right: ${(props) => props.mr || spacings.x0}px;
  margin-left: ${(props) => props.ml || spacings.x0}px;
  padding: ${(props) => props.padding || spacings.x0}px;
  color: ${(props) => props.color || colors.primary};
  text-align: ${(props) => props.textAlign || "left"};
`;

export { StyledText };
