import { render } from "@testing-library/react";
import Button from "..";

describe("Button", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Button variant="primary">Teste</Button>);

    const button = getByText("Teste");

    expect(button).toBeInTheDocument();
  });

  it("should onclick correctly", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button variant="primary" onClick={onClick}>
        Teste
      </Button>
    );

    const button = getByText("Teste");

    button.click();

    expect(onClick).toHaveBeenCalled();
  });
});
