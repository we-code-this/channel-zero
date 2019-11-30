import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { expect } from "chai";
import Releases from "./Releases";

Enzyme.configure({ adapter: new Adapter() });

describe("Releases", () => {
  const releaseData = [
    {
      id: 1,
      artist: "Release 1 Artist",
      title: "Release 1 Title",
      slug: "release-1-title",
      imageUrl: "http://example.com"
    },
    {
      id: 2,
      artist: "Release 2 Artist",
      title: "Release 2 Title",
      slug: "release-2-title",
      imageUrl: "http://example.com"
    }
  ];

  it("should contain correct number of Releases", () => {
    const releases = render(<Releases releases={releaseData} />);
    expect(releases.find(".release").length).to.equal(2);
  });
});
