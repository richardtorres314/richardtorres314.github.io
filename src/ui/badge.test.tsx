import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Badge, badgeVariants as badgeVariant } from "./badge";

describe("Badge", () => {
  test("renders badge with default variant", () => {
    const badge = render(<Badge variant="default">Badge</Badge>).container.firstChild as HTMLElement;
    expect(badge).toHaveClass("inline-flex");
  });

  test("renders badge with secondary variant", () => {
    const badge = render(<Badge variant="secondary">Badge</Badge>).container.firstChild as HTMLElement;
    expect(badge).toHaveClass("bg-secondary");
  });

  test("renders badge with destructive variant", () => {
    const badge = render(<Badge variant="destructive">Badge</Badge>).container.firstChild as HTMLElement;
    expect(badge).toHaveClass("bg-destructive");
  });

  test("badgeVariants default variant exists", () => {
    expect(badgeVariant).toBeDefined();
  });

  test("badge renders all children", () => {
    const { container } = render(<Badge>Default</Badge>);
    expect(screen.getByText("Default")).toBeInTheDocument();
    expect(container.firstChild).toBeInTheDocument();
  });

  test("badge passes className to internal div", () => {
    const { container } = render(<Badge className="custom-class">Badge</Badge>);
    const div = container.firstChild as HTMLDivElement;
    expect(div.className).toContain("custom-class");
  });

  test("badge renders default text", () => {
    const { container } = render(<Badge>Default</Badge>);
    const div = container.firstChild as HTMLDivElement;
    expect(div).toBeInTheDocument();
  });
});
