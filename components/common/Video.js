const Video = props => (
  <div className="video-container">
    <iframe
      src={props.src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default Video;
