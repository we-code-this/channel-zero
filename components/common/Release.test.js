import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { expect } from "chai";
import Release from "./Release";

Enzyme.configure({ adapter: new Adapter() });

describe("Release", () => {
  const releaseData = {
    id: 1,
    artist: "Release Artist",
    title: "Release",
    slug: "release",
    imageUrl: "http://example.com"
  };

  it("should render release", () => {
    const release = render(<Release {...releaseData} />);
    expect(release.attr("class")).to.have.string("release");
  });
});
