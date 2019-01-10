import React, { Component } from "react";

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
                return (
                  <div className="column" key={`article-${article.id}`}>
                    <div className="column-content">
                      <h2 className="title is-4">
                        <a href={article.url}>{article.title}</a>
                      </h2>
                      <p>
                        {article.summary} <a href="#">Read more…</a>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Articles;
