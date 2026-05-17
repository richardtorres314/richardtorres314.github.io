import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Badge, badgeVariants } from "./badge";

describe("Badge", () => {
  test("renders badge with default variant", () => {
    const { container } = render(<Badge variant="default">Badge</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass("bg-primary");
  });

  test("renders badge with secondary variant", () => {
    const { container } = render(<Badge variant="secondary">Badge</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass("bg-secondary");
  });

  test("renders badge with destructive variant", () => {
    const { container } = render(<Badge variant="destructive">Badge</Badge>);
    const badge = container.firstChild;
    expect(badge).toHaveClass("bg-destructive");
  });

  test("renders badge with outline variant", () => {
    const { container } = render(<Badge variant="outline">Badge</Badge>);
    const badge = container.firstChild;
    expect(badge).not.toHaveClass("bg-primary");
  });

  test("badgeVariants exports default variant", () => {
    expect(badgeVariants).toBeDefined();
  });
});
