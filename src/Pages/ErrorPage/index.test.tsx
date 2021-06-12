import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import ErrorPage from ".";
import { Store } from "../../Redux/Store";

describe("ErrorPage", () => {
    test("should load error page", async () => {
      const { getByTestId } = await Promise.resolve(
        render(
          <Provider store={Store}>
            <MemoryRouter initialEntries={["/some-random-url"]}>
              <ErrorPage/>
            </MemoryRouter>
          </Provider>
        )
      );
      expect(getByTestId("ErrorPage")).toBeTruthy();
    });
  });