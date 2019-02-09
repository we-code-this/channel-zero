import React, { Component } from "react";
import { Columns } from "react-bulma-components";
import Article from "../common/Article";

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: props.articles
    };
  }

  render() {
    const articles = this.state.articles;
    const articleRows = [];

    let i = 0;

    while (i < articles.length) {
      articleRows.push(articles.slice(i, i + 3));

      i += 3;
    }

    return (
      <React.Fragment>
        {articleRows.map((row, index) => {
          return (
            <Columns key={`row-${index}`}>
              {row.map(article => {
                return <Article {...article} key={`article-${article.id}`} />;
              })}
            </Columns>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Articles;
