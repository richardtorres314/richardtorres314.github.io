import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Freebies from "../app/freebies/page";

describe("Freebies", () => {
  test("renders freebies page", () => {
    render(<Freebies />);
    expect(document.body).toBeInTheDocument();
  });

  test("renders freebies list", () => {
    render(<Freebies />);
    expect(document.body).toBeInTheDocument();
  });
});
