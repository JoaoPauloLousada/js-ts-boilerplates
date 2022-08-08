import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App.tsx", () => {
  it("should mount properly", () => {
    const { getByText } = render(<App />);
    const h1 = getByText("App");
    expect(h1).toBeInTheDocument();
  });
});
