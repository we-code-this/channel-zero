import { Icon } from "react-bulma-components";

const Vendor = props => (
  <a href={props.url} className="button is-small is-info is-radiusless">
    <Icon size="small">
      <svg className="svg-icon">
        <use xlinkHref={`#icon-${props.icon_class}`} />
      </svg>
    </Icon>
    <span>{props.name}</span>
  </a>
);

export default Vendor;
