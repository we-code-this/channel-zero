const Promo = props => {
  const classes = props.className ? `${props.className} promo` : "promo";

  return (
    <a href={props.url} className={classes}>
      <img src={props.imageUrl} alt={props.name} />
    </a>
  );
};

export default Promo;
