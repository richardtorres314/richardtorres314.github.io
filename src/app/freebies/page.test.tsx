import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Page from "./page";

describe("Freebies Page", () => {
  it("renders freebies page unchanged", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });

  it("renders freebies list", () => {
    render(<Page />);
    const freebiesList = screen.getByRole("list").childElementCount;
    expect(freebiesList).toBeGreaterThan(0);
  });
});
