import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import PageNotFound from ".";

import { Store } from "../../Redux/Store";

describe("PageNotFound", () => {
  test("should load page not found", async () => {
    const { getByTestId } = await Promise.resolve(render(<PageNotFound />));
    expect(getByTestId("PageNotFound")).toBeTruthy();
  });
});
