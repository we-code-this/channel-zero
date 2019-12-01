import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { expect } from "chai";
import Footer from "./Footer";

Enzyme.configure({ adapter: new Adapter() });

describe("Footer", () => {
  let footer;

  beforeEach(() => {
    footer = render(<Footer />);
  });

  it("should render", () => {
    expect(footer.hasClass('footer')).to.be.true;
    expect(footer.find('p').length).to.equal(1);
  });
});
