import { render } from "enzyme";
import React from "react";
import { expect } from "chai";

import Feature from "../../../components/home/Feature";

describe("Feature Render", () => {
  const article = {
    id: 1,
    url: "/feature",
    title: "Feature Article",
    summary: "Feature summary"
  };

  const video = {
    id: 1,
    src: "http://example.com"
  };

  const featureWithVideoData = {
    article,
    video
  };

  const featureNoVideoData = {
    article
  };

  it("should contain one article", () => {
    const feature = render(<Feature {...featureWithVideoData} />);
    expect(feature.find(".article").length).to.equal(1);
  });

  it("should contain video when one’s provided", () => {
    const feature = render(<Feature {...featureWithVideoData} />);
    expect(feature.find(".video-container").length).to.equal(1);
  });

  it("should not contain video", () => {
    const feature = render(<Feature {...featureNoVideoData} />);
    expect(feature.find(".video-container").length).to.equal(0);
  });
});
