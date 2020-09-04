import React, { useState, useEffect } from "react";
import axios from "./axios/axios";

import Video from "./components/video/video.component";

import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get("/api/v1/posts");
      setVideos(res.data.data.posts);

      return res;
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({
            _id,
            url,
            channel,
            description,
            song,
            likes,
            messages,
            shares,
          }) => (
            <Video
              key={_id}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;

// https://v16m.tiktokcdn.com/873c570bdc5b3a19361ccc19c6b31c4f/5f4bd6e9/video/tos/useast2a/tos-useast2a-pve-0068/82b1f62177234661a169cc07c31fefd4/?a=1233&br=4750&bt=2375&cr=0&cs=0&dr=0&ds=3&er=&l=202008301042060101890491561695DA0A&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajU1cXRmPHFpdzMzOjczM0ApODQ1OGZkN2Q7Nzs8Nmk5NmdtZWs2XmBmNi9fLS1jMTZzcy4yXmJfYzM1LjE0Y19eYF46Yw%3D%3D&vl=&vr=
