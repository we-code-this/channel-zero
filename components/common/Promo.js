const Promo = props => {
  const classes = props.className ? `${props.className} promo` : "promo";

  return (
    <a href={props.url} className={classes}>
      <img src={`/static/img/logos/${props.filename}`} alt={props.name} />
    </a>
  );
};

export default Promo;
