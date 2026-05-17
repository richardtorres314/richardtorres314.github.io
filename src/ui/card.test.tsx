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
    render(
      <Card>
        <CardDescription>CardDescription</CardDescription>
        <p>Test</p>
      </Card>,
    );
    expect(screen.getByText("CardDescription")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("renders card with content", () => {
    render(
      <Card>
        <CardContent>CardContent</CardContent>
      </Card>,
    );
    const cardContent = screen.getByText("CardContent");
    expect(cardContent).toHaveClass("p-6");
  });

  test("renders card with footer", () => {
    render(
      <Card>
        <CardFooter>CardFooter</CardFooter>
      </Card>,
    );
    const cardFooter = screen.getByText("CardFooter");
    expect(cardFooter).toHaveClass("p-6");
    expect(cardFooter).toHaveClass("flex");
  });
});
