import React from "react";

import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

import "./video-footer.style.css";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>

        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker>
            {({ index }) => (
              <div>
                <p>{song}&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</p>
              </div>
            )}
          </Ticker>
        </div>
      </div>

      <img src="https://static.thenounproject.com/png/934821-200.png" alt="" />
    </div>
  );
}

export default VideoFooter;
