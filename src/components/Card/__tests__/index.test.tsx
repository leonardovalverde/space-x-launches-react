import { render } from "@testing-library/react";
import Card from "..";

describe("Card", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <Card
        data={[
          {
            label: "Teste",
            value: "Teste",
          },
        ]}
      />
    );

    const card = getByText("Teste: Teste");

    expect(card).toBeInTheDocument();
  });
});
