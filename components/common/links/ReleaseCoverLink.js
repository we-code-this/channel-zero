import Link from "next/link";

const ReleaseCoverLink = props => (
  <Link
    prefetch
    as={`/dig/release/${props.slug}`}
    href={`/dig/release?slug=${props.slug}`}
  >
    <a>
      <img
        src={`/static/files/releases/${props.filename}`}
        alt={`${props.artist} - ${props.title}`}
      />
    </a>
  </Link>
);

export default ReleaseCoverLink;
