import styled from "styled-components";
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
`;

const LaunchesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${spacings.x8}px;
`;

export { Container, PanelContainer, LaunchesContainer, HeaderContainer };
