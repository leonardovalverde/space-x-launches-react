import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import Launches from "../index";

describe("Launches", () => {
  it("should show there's no launches", async () => {
    const { getByTestId, getByText } = render(<Launches />);
    const pastLaunchesButton = getByTestId("past-launches-button");
    userEvent.click(pastLaunchesButton);
    const noLaunches = getByText(
      "Não existem lançamentos para o período selecionado"
    );
    expect(noLaunches).toBeInTheDocument();
  });

  it("should show past launches", async () => {
    render(<Launches />);

    const pastLaunchesButton = screen.getByTestId("past-launches-button");

    // Estava pensando em alguma alternativa para este timeout, não me sinto confortável com ele.
    setTimeout(() => {
      fireEvent.click(pastLaunchesButton);
    }, 1000);

    const launchName = await screen.findByText("Nome: FalconSat");

    expect(launchName).toBeInTheDocument();
  });
});
