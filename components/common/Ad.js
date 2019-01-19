const Ad = props => {
  let adClass = props.mobile ? "m-a" : "l-a";

  return (
    <div className={adClass}>
      <div className="column-content">
        <a href={props.url}>
          <img src={`/static/files/a/${props.filename}`} alt={props.alt} />
        </a>
      </div>
    </div>
  );
};
export default Ad;
