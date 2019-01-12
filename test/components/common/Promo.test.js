import { render } from "enzyme";
import React from "react";
import { expect } from "chai";

import Promo from "../../../components/common/Promo";

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
