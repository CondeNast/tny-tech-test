import { render } from "@testing-library/react";
import Footer from "./index";

describe("Footer Component", () => {
  test("loads items eventually", async () => {
    const { getByTestId } = await Promise.resolve(render(<Footer />));
    expect(getByTestId("Footer")).toBeTruthy();
  });
});
