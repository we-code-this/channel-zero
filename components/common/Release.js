const Release = props => (
  <div className="column-content-inline">
    <a href={props.url}>
      <img src={props.imageUrl} alt={`${props.artist} - ${props.title}`} />
    </a>
  </div>
);

export default Release;
