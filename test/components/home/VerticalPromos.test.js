import { render } from "enzyme";
import React from "react";
import { expect } from "chai";

import VerticalPromos from "../../../components/home/VerticalPromos";

describe("VerticalPromos", () => {
  const promos = [
    {
      id: 1,
      name: "Test Promo 1",
      url: "#",
      imageUrl: "http://example.com"
    },
    {
      id: 2,
      name: "Test Promo 2",
      url: "#",
      imageUrl: "http://example.com"
    }
  ];

  it("should contain two promos", () => {
    const vPromos = render(<VerticalPromos promos={promos} />);
    expect(vPromos.find(".promo").length).to.equal(2);
  });
});
