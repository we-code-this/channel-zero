import Enzyme, { render } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import App from "./release";
import { findBySlug } from "../../../models/Release/releases";

Enzyme.configure({ adapter: new Adapter() });

describe("pages/dig/release", () => {
  let app;
  let release;
  
  beforeEach(async () => {
    release = await findBySlug("artist-1-album-1");
    app = render(<App release={release} />);
  });

  it("should getInitialProps", async () => {
    const initalProps = await App.getInitialProps({
      query: { slug: "artist-1-album-1" }
    });

    expect(initalProps).to.deep.equal({ release });
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
