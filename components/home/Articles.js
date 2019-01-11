import React, { Component } from "react";
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
            <div className="columns" key={`row-${index}`}>
              {row.map(article => {
                return <Article {...article} key={`article-${article.id}`} />;
              })}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Articles;
