import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div
      className="ui segment"
      style={{ display: "flex", alignContent: "center" }}>
      <a href="#">
        <img
          src={`${video.snippet.thumbnails.medium.url}`}
          alt={`${video.snippet.description}`}
        />
      </a>
      <a href={`${video.etag}`}>{video.snippet.title}</a>
    </div>
  );
};

export default VideoItem;
