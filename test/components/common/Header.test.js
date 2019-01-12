import { render } from "enzyme";
import React from "react";
import { expect } from "chai";

import Header from "../../../components/common/Header";

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
