import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { endpoints } from "../../../services/endpoints";
import server from "../../../services/msw/server";

import Launches from "../index";

describe("Launches", () => {
  it("should show there's no launches", async () => {
    render(<Launches />);

    server.use(
      rest.get(`${endpoints.launches}/past`, (req, res, ctx) => {
        return res(ctx.json([]));
      })
    );

    const pastLaunchesButton = screen.getByTestId("past-launches-button");
    userEvent.click(pastLaunchesButton);

    const noLaunches = screen.getByText(
      "Não existem lançamentos para o período selecionado"
    );
    expect(noLaunches).toBeInTheDocument();
  });

  it("should show past launches", async () => {
    render(<Launches />);

    await waitFor(() => {
      const pastLaunchesButton = screen.getByTestId("past-launches-button");
      fireEvent.click(pastLaunchesButton);

      const launchName = screen.getByText("Nome: FalconSat");
      const secondLaunchName = screen.getByText("Nome: DemoSat");

      expect(launchName).toBeInTheDocument();
      expect(secondLaunchName).toBeInTheDocument();
    });
  });

  it("should show latest launch", async () => {
    render(<Launches />);

    await waitFor(() => {
      const latestLaunchesButton = screen.getByTestId("latest-launches-button");
      fireEvent.click(latestLaunchesButton);

      const launchName = screen.getByText("Nome: Crew-5");
      expect(launchName).toBeInTheDocument();
    });
  });

  it("should show next launch", async () => {
    render(<Launches />);

    await waitFor(() => {
      const nextLaunchesButton = screen.getByTestId("next-launches-button");
      fireEvent.click(nextLaunchesButton);

      const launchName = screen.getByText("Nome: USSF-44");
      expect(launchName).toBeInTheDocument();
    });
  });

  it("should show upcoming launches", async () => {
    render(<Launches />);

    await waitFor(() => {
      const upcomingLaunchesButton = screen.getByTestId(
        "upcoming-launches-button"
      );
      fireEvent.click(upcomingLaunchesButton);

      const launchName = screen.getByText("Nome: USSF-44");
      const secondLaunchName = screen.getByText("Nome: Starlink 4-36 (v1.5)");

      expect(launchName).toBeInTheDocument();
      expect(secondLaunchName).toBeInTheDocument();
    });
  });
});
