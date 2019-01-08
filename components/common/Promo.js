const Promo = props => {
  const classes = props.className ? props.className : "";

  return (
    <a href={props.url} className={classes}>
      <img src={props.imageUrl} alt={props.name} />
    </a>
  );
};

export default Promo;
