import { render } from "@testing-library/react";
import Text from "..";

describe("Text", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Text>Test</Text>);

    const text = getByText("Test");

    expect(text).toBeInTheDocument();
  });
});
