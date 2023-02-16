import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PanelImage = styled.img<{ roundedImage?: boolean }>`
  max-width: 150px;
  height: 100%;
  object-fit: cover;
  border-radius: ${(props) => (props.roundedImage ? "50%" : "0")};
`;

export { Container, PanelImage };
