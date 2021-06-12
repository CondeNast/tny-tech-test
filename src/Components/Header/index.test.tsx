import { render } from "@testing-library/react";
import Header from "./index";

describe("Header Component", () => {
  test("loads items eventually", async () => {
    const { getByTestId } = await Promise.resolve(render(<Header />));
    expect(getByTestId("Header")).toBeTruthy();
  });
});
