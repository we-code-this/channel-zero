const Vendor = props => (
  <a href={props.url} className="button is-small is-info is-radiusless">
    <span className="icon is-small">
      <svg className="svg-icon">
        <use xlinkHref={`#icon-${props.icon_class}`} />
      </svg>
    </span>
    <span>{props.name}</span>
  </a>
);

export default Vendor;
