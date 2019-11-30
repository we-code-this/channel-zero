import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { expect } from "chai";
import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });

describe("Header", () => {
  let header;

  beforeEach(() => {
    header = render(<Header />);
  });

  it("should contain a logo", () => {
    const logo = header.find(".logo");

    expect(logo.length).to.equal(1);
    expect(logo.find("img").length).to.equal(1);
    expect(logo.find("img").attr("src")).to.have.string("logo.svg");
  });
});
