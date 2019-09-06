import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  const DashboardWrapper = props => (
    <Router>
      <Dashboard {...props} />
    </Router>
  );

  describe("Menu", () => {
    it("renders title", () => {
      const { getByText } = render(<DashboardWrapper />);
      expect(getByText("Pokedex")).toBeInTheDocument();
    });
    it("renders Home", () => {
      const { getByText } = render(<DashboardWrapper />);
      expect(getByText("Home")).toBeInTheDocument();
    });
    it("renders About", () => {
      const { getByText } = render(<DashboardWrapper />);
      expect(getByText("About")).toBeInTheDocument();
    });

    it("opens correctly visibility", async () => {
      const { getByLabelText, getByText } = render(<DashboardWrapper />);
      let Home = getByText("Home");
      expect(Home).not.toBeVisible();

      // Click menu
      fireEvent.click(getByLabelText("open drawer"));

      Home = await getByText("Home");
      expect(Home).toBeVisible();
    });
  });
});
