import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { colors } from "./ui-tokens/colors";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto Condensed', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: ${colors.secondary};
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
