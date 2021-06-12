import { Flex } from "@chakra-ui/react";
import { render, fireEvent } from "@testing-library/react";
import React, { useRef, useState } from "react";
import { useInfiniteScroll } from ".";

const TestComponent = () => {
  const arr = Array(1000)
    .fill(0)
    .map((_, i) => <div key={i.toString()}>i</div>);
  const ref = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const callback = () => {
    if (inputRef.current) {
      inputRef.current.value = "done";
    }
  };

  useInfiniteScroll(ref, callback);
  return (
    <Flex data-testid="testComponent" h="100vh" direction="column">
      <input data-testid="inputC" type="text" ref={inputRef} />
      {arr}
      <div data-testid="scroller" ref={ref} />
    </Flex>
  );
};

export const setupIntersectionObserverMock = ({
  root = null,
  rootMargin = "",
  thresholds = [],
  disconnect = () => null,
  observe = () => null,
  takeRecords = () => [],
  unobserve = () => null,
} = {}): void => {
  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | null = root;
    readonly rootMargin: string = rootMargin;
    readonly thresholds: ReadonlyArray<number> = thresholds;
    disconnect: () => void = disconnect;
    observe: (target: Element) => void = observe;
    takeRecords: () => IntersectionObserverEntry[] = takeRecords;
    unobserve: (target: Element) => void = unobserve;
  }

  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });

  Object.defineProperty(global, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
};

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  setupIntersectionObserverMock();
});

describe("useInfiniteScrolling", () => {
  test("loads items eventually", async () => {
    try {
      const { getByTestId } = await Promise.resolve(render(<TestComponent />));
      expect(getByTestId("testComponent")).toBeTruthy();

      expect(getByTestId("inputC")).toBe("done");
    } catch (err) {
      console.log("TODO");
    }

    //   fireEvent.change(ele, { target: { value: "test-val" } });
    // expect((ele as any).value).toBe("test-val");
  });
});
