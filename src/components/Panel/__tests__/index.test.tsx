import { render } from "@testing-library/react";
import Panel from "..";

describe("Panel", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <Panel
        title="Test Title"
        description="Test Description"
        buttonVariant="primary"
        buttonDescription="Button Test"
      />
    );

    const title = getByText("Test Title");
    const description = getByText("Test Description");
    const button = getByText("Button Test");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
