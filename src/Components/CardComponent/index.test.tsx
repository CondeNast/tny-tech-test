import { render } from "@testing-library/react";
import CardComponent from "./index";
import "@testing-library/jest-dom/extend-expect";
import { ArticlesModel } from "../../utils/NewsModel";

describe("CardComponent Component", () => {
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

    const ob = new ArticlesModel();

    ob.title = "sometitle";
    ob.author = "someauthor";
    ob.description = "somedescription";
    ob.source.name = "somename";
    ob.urlToImage = "someimage";

    const { getByTestId } = await Promise.resolve(
      render(<CardComponent {...ob} />)
    );
    expect(getByTestId("CardComponent")).toBeTruthy();
    expect(getByTestId("CardComponentTitle")).toHaveTextContent("sometitle");
    expect(getByTestId("CardComponentName")).toHaveTextContent("somename");
    expect(getByTestId("CardComponentDescription")).toHaveTextContent(
      "somedescription"
    );
    expect(getByTestId("CardComponentImage")).toBeTruthy();
  });
});
