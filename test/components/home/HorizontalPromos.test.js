import { render } from "enzyme";
import React from "react";
import { expect } from "chai";

import HorizontalPromos from "../../../components/home/HorizontalPromos";

describe("HorizontalPromos", () => {
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
    const hPromos = render(<HorizontalPromos promos={promos} />);
    expect(hPromos.find(".promo").length).to.equal(2);
  });
});
