import Link from "next/link";

const Promo = props => {
  const classes = props.className ? `${props.className} promo` : "promo";

  return (
    <Link href={props.url}>
      <a className={classes}>
        <img src={`/static/img/logos/${props.filename}`} alt={props.name} />
      </a>
    </Link>
  );
};

export default Promo;
