import React, {useState} from 'react';
import video from "../data/video.js";
import Likes from "./Likes.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div>
      <div className="App">
        <iframe
          width="919"
          height="525"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
        />
      </div>
      <div>
        <h1>{video.title}</h1>
        <span>{video.views} Views    </span>
        <span>|    Uploaded {video.createdAt}</span>
      </div>
      <Likes />
      <Comments />
    </div>
  );
}

export default App;

// likes={likes} setLikes={setLikes} dislikes={dislikes} setDislikes={setDislikes}
