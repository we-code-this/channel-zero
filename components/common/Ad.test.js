import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { expect } from "chai";
import Ad from "./Ad";

Enzyme.configure({ adapter: new Adapter() });

describe("Ad", () => {
  const adData = {
    url: "/ad",
    alt: "Test Ad",
    imageUrl: "http://example.com"
  };

  const mobileAdData = {
    ...adData,
    mobile: true
  };

  it("should render ad", () => {
    const ad = render(<Ad {...adData} />);
    expect(ad.attr("class")).to.have.string("l-a");
  });

  it("should render mobile ad", () => {
    const ad = render(<Ad {...mobileAdData} />);
    expect(ad.attr("class")).to.have.string("m-a");
  });
});
