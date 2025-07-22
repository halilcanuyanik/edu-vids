import React from "react";
import VideoCard from "./VideoCard";

function CategorySection({ category, videos, onVideoClick }) {
  return (
    <div className="category-section">
      <div className="category-label">{category}</div>
      <div className="category-divider" />
      <div className="video-row">
        {videos.map((video, i) => (
          <VideoCard
            key={i}
            video={video}
            onClick={() => onVideoClick(video)}
          />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
