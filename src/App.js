import React from "react";
import CategorySection from "./components/CategorySection";
import ModalPlayer from "./components/ModalPlayer";
import videoData from "./data/videos";
import "./App.css";

function App() {
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  return (
    <div className="app">
      {videoData.map((cat, i) => (
        <CategorySection
          key={i}
          category={cat.category}
          videos={cat.videos}
          onVideoClick={setSelectedVideo}
        />
      ))}

      {selectedVideo && (
        <ModalPlayer
          src={selectedVideo.src}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}

export default App;
