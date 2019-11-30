import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { expect } from "chai";
import Article from "./Article";

Enzyme.configure({ adapter: new Adapter() });

describe("Article", () => {
  let article;
  const data = {
    id: 1,
    title: "Test Article",
    url: "/a/url",
    summary: "A test summary"
  };

  beforeEach(() => {
    article = render(<Article {...data} />);
  });

  it("should render title", () => {
    expect(article.find("h2").text()).to.have.string("Test Article");
  });

  it("should render summary", () => {
    expect(article.text()).to.have.string("A test summary");
  });

  it("should render url", () => {
    article.find("a").map((i, link) => {
      expect(link.attribs.href).to.have.string("/a/url");
    });
  });
});
