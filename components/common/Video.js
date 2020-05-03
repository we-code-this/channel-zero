const Video = (props) => (
  <div className="video-container">
    <iframe
      src={props.src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={props.title}
    />
  </div>
);

export default Video;
