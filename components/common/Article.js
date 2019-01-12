const Article = props => (
  <div className="column article">
    <div className="column-content">
      <h2 className="title is-4">
        <a href={props.url}>{props.title}</a>
      </h2>
      <p>
        {props.summary} <a href="#">Read more…</a>
      </p>
    </div>
  </div>
);

export default Article;
