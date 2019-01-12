import { render } from "enzyme";
import React from "react";
import { expect } from "chai";

import Articles from "../../../components/home/Articles";

describe("Articles Render", () => {
  let articles;
  const articlesData = [
    {
      id: 1,
      title: "Article 1",
      url: "#",
      summary: "something"
    },
    {
      id: 2,
      title: "Article 2",
      url: "#",
      summary: "something"
    }
  ];

  beforeEach(() => {
    articles = render(<Articles articles={articlesData} />);
  });

  it("should contain correct number of Articles", () => {
    expect(articles.find(".article").length).to.equal(2);
  });

  it("should render the correct articles", () => {
    expect(
      articles
        .find(".article")
        .first()
        .text()
    ).to.have.string("Article 1");
    expect(
      articles
        .find(".article")
        .last()
        .text()
    ).to.have.string("Article 2");
  });
});
