import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { expect } from "chai";
import DigHeader from "../../../components/common/DigHeader";

Enzyme.configure({ adapter: new Adapter() });

describe("DigHeader", () => {
  let header;

  beforeEach(() => {
    header = render(<DigHeader />);
  });

  it("should render", () => {
      expect(header.hasClass('dig-header')).to.be.true;
  });

  it("should contain Channel Zero logo", () => {
    const logo = header.find(".logo");

    expect(logo.length).to.equal(1);
    expect(logo.find("img").length).to.equal(1);
    expect(logo.find("img").attr("src")).to.have.string("logo.svg");
  });

  it("should contain Dig logo", () => {
    const logo = header.find(".dig-logo");

    expect(logo.length).to.equal(1);
    expect(logo.find("img").length).to.equal(1);
    expect(logo.find("img").attr("src")).to.have.string("dig-the-dig.svg");
  });
});
