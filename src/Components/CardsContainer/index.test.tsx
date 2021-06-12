import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import CardsContainer from ".";
import React from "react";
import { Provider } from "react-redux";
import { Store } from "../../Redux/Store";

describe("CardsContainer Component", () => {
  test("loads items eventually", async () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const { getByTestId } = await Promise.resolve(
      render(
        <Provider store={Store}>
          <CardsContainer pathname="/" />
        </Provider>
      )
    );
    expect(getByTestId("CardsContainer")).toBeTruthy();
  });
});
