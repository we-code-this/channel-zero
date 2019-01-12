import { render } from "enzyme";
import React from "react";
import { expect } from "chai";

import Articles from "../../../components/home/Articles";

describe("Articles", () => {
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

  it("should contain correct number of Articles", () => {
    const articles = render(<Articles articles={articlesData} />);
    expect(articles.find(".article").length).to.equal(2);
  });
});
