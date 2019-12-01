import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { expect } from "chai";
import Promo from "../../../components/common/Promo";

Enzyme.configure({ adapter: new Adapter() });

describe("Promo", () => {
  const promoData = {
    url: "/promo",
    name: "Test Promo",
    imageUrl: "http://example.com"
  };

  const promoWithClassNameData = {
    ...promoData,
    className: "test-class"
  };

  it("should render promo", () => {
    const promo = render(<Promo {...promoData} />);
    expect(promo.attr("class")).to.be.string("promo");
  });

  it("should render promo with custom class", () => {
    const promo = render(<Promo {...promoWithClassNameData} />);
    expect(promo.attr("class")).to.have.string("test-class");
  });
});
