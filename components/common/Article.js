import { Columns } from "react-bulma-components";

const Article = props => {
  return (
    <Columns.Column className="article">
      <div className="column-content">
        <h2 className="title is-4">
          <a href="#">{props.title}</a>
        </h2>
        <p>
          {props.summary.replace(/^(.{200}[^\s]*).*/, "$1…")}{" "}
          <a href="#">Read more…</a>
        </p>
      </div>
    </Columns.Column>
  );
};

export default Article;
