import { render } from "enzyme";
import React from "react";
import { expect } from "chai";

import Release from "../../../components/common/Release";

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
