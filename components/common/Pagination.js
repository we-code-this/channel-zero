import React, { Component } from "react";
import { Link } from "../../routes";

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: props.currentPage,
      count: props.count,
      perPage: props.perPage,
      path: props.path
    };
  }

  previous(page, path) {
    const prev = parseInt(page) - 1;
    return page > 1 ? (
      <Link href={`${path}?page=${prev}`}>
        <a className="pagination-previous">Previous</a>
      </Link>
    ) : (
      undefined
    );
  }

  next(page, totalPages, path) {
    const next = parseInt(page) + 1;
    return page < totalPages ? (
      <Link prefetch href={`${path}?page=${next}`}>
        <a className="pagination-next">Next page</a>
      </Link>
    ) : (
      undefined
    );
  }

  link(page, totalPages, path) {
    const pageNumber = parseInt(page) + 1;
    return page === 1 ||
      page === totalPages ||
      (page >= page - 2 && page <= page + 2) ? (
      <li key={`page-${page}`}>
        <Link prefetch href={`${path}?page=${pageNumber}`}>
          <a
            className="pagination-link"
            aria-label={`Go to page ${pageNumber}`}
          >
            {pageNumber}
          </a>
        </Link>
      </li>
    ) : (
      ""
    );
  }

  links() {
    const link = this.link;
    const path = this.state.path;
    return (
      <React.Fragment>
        {this.previous(this.props.currentPage, path)}
        {this.next(this.props.currentPage, this.props.pageCount, path)}
        <ul className="pagination-list">
          {Array.from(Array(this.props.pageCount).keys()).map(page => {
            return link(page, this.props.pageCount, path);
          })}
        </ul>
      </React.Fragment>
    );
  }

  render() {
    return (
      <nav
        className="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        {this.links()}
      </nav>
    );
  }
}

export default Pagination;
