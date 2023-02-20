import styled from "styled-components";
import { breakpoints } from "../../ui-tokens/breakpoints";
import { colors } from "../../ui-tokens/colors";
import { spacings } from "../../ui-tokens/spacings";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacings.x8}px;
  color: ${colors.primary};
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PanelContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${spacings.x8}px;
  }

  @media (max-width: ${breakpoints.smallTablet}px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${spacings.x8}px;
  }
`;

export { Container, PanelContainer, HeaderContainer };
