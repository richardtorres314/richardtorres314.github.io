import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

describe("Card", () => {
  test("renders card with header", () => {
    render(
      <Card>
        <CardHeader>CardHeader</CardHeader>
      </Card>,
    );
    expect(screen.getByText("CardHeader")).toBeInTheDocument();
  });

  test("renders card with title", () => {
    render(
      <Card>
        <CardTitle>Title</CardTitle>
      </Card>,
    );
    const title = screen.getByText("Title");
    expect(title).toHaveClass("text-lg");
    expect(title).toHaveClass("font-semibold");
  });

  test("renders card with description", () => {
    render(
      <Card>
        <CardDescription>CardDescription</CardDescription>
      </Card>,
    );
    const cardDescription = screen.getByText("CardDescription");
    expect(cardDescription).toHaveClass("text-sm");
  });

  test("renders card with description with children", () => {
    const { getByText } = render(
      <Card>
        <CardDescription>CardDescription</CardDescription>
        <p>Test</p>
      </Card>,
    );
    expect(getByText("CardDescription")).toBeInTheDocument();
    expect(getByText("Test")).toBeInTheDocument();
  });

  test("renders card with content", () => {
    const { getByText } = render(
      <Card>
        <CardContent>CardContent</CardContent>
      </Card>,
    );
    const cardContent = getByText("CardContent");
    expect(cardContent).toHaveClass("p-6");
  });

  test("renders card with footer", () => {
    const { getByText } = render(
      <Card>
        <CardFooter>CardFooter</CardFooter>
      </Card>,
    );
    const cardFooter = getByText("CardFooter");
    expect(cardFooter).toHaveClass("p-6", "flex");
  });
});
