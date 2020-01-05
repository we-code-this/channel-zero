import Link from 'next/link';

const Promo = props => {
  const classes = props.className
    ? `${props.className} promo`
    : 'promo';

  if (props.url !== '#') {
    return (
      <Link href={props.url}>
        <a className={classes}>
          <img src={props.image_url} alt={props.name} />
        </a>
      </Link>
    );
  } else {
    return (
      <span className={classes}>
        <img src={props.image_url} alt={props.name} />
      </span>
    );
  }
};

export default Promo;
