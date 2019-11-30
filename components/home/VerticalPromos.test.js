import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { expect } from "chai";
import VerticalPromos from "./VerticalPromos";

Enzyme.configure({ adapter: new Adapter() });

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
