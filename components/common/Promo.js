import Link from "next/link";

const Promo = props => {
  const classes = props.className ? `${props.className} promo` : "promo";

  return (
    <Link href={props.url}>
      <a className={classes}>
        <img
          src={props.image_url}
          alt={props.name}
        />
      </a>
    </Link>
  );
};

export default Promo;
