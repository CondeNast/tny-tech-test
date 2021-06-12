import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ScrollToTop from "./index";

describe("ScrollToTop Component", function () {
  test("loads items eventually", async function () {
    Element.prototype.scrollIntoView = jest.fn();
    const { getByTestId } = await Promise.resolve(
      render(
        <MemoryRouter initialEntries={["/"]}>
          <ScrollToTop />
        </MemoryRouter>
      )
    );
    expect(getByTestId("ScrollToTop")).toBeTruthy();
  });
});
