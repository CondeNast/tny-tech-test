import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PageLayout from "./index";

describe("PageLayout Component", () => {
  test("loads items eventually", async () => {
    Element.prototype.scrollIntoView = jest.fn();
    const { getByTestId } = await Promise.resolve(
      render(
        <MemoryRouter initialEntries={["/"]}>
          <PageLayout>
            <h1 data-testid="h1">Hello</h1>
          </PageLayout>
        </MemoryRouter>
      )
    );
    expect(getByTestId("PageLayout")).toBeTruthy();
    expect(getByTestId("h1")).toBeTruthy();
  });
});
