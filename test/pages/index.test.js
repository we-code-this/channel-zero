import { render } from "enzyme";
import React from "react";
import { expect } from "chai";

import App from "../../pages/index";
import { fetchHomeProps } from "../../models/utilities";

describe("pages/index", () => {
  let app;
  let props;

  beforeEach(async () => {
    props = await fetchHomeProps();
    app = render(<App {...props} />);
  });

  it("should getInitialProps", async () => {
    const initalProps = await App.getInitialProps();
    expect(initalProps).to.deep.equal(props);
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
