import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import SearchComponent from ".";
import { Store } from "../../Redux/Store";

describe("Search Component", () => {
  test("loads items eventually", async () => {
    const { getByTestId } = await Promise.resolve(
      render(
        <Provider store={Store}>
          <MemoryRouter initialEntries={["/"]}>
            <SearchComponent pathname="/" />
          </MemoryRouter>
        </Provider>
      )
    );
    expect(getByTestId("SearchComponent")).toBeTruthy();
    const ele = getByTestId("SearchComponentInput");
    fireEvent.change(ele, { target: { value: "test-val" } });
    expect((ele as any).value).toBe("test-val");
  });
});
