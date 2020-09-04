import React, { useRef, useState } from "react";

import VideoFooter from "../video-footer/video-footer.component";
import VideoSidebar from "../video-sidebar/video-sidebar.component";

import "./video.style.css";

function Video({ url, channel, description, song, likes, shares, messages }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (!isPlaying) videoRef.current.play();
    else videoRef.current.pause();

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video">
      <video
        className="video__player"
        src={url}
        loop
        onClick={handleClick}
        ref={videoRef}
      ></video>

      <VideoFooter channel={channel} description={description} song={song} />

      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
