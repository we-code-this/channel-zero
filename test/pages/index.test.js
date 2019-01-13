import { render } from "enzyme";
import React from "react";
import { expect } from "chai";

import App from "../../pages/index";
import { fetchHomeProps } from "../../models/utilities";

describe("pages/index", async () => {
  let app;
  const props = await fetchHomeProps();

  beforeEach(() => {
    app = render(<App {...props} />);
  });

  it("should render header", () => {
    expect(app.find(".header").length).to.equal(1);
  });

  it("should render footer", () => {
    expect(app.find("footer").length).to.equal(1);
  });

  it("should render #main", () => {
    expect(app.find("#main").length).to.equal(1);
  });
});
