import React, { useEffect, useRef, useState } from "react";
import "./VideoCard.css";

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
}

function VideoCard({ video, onClick }) {
  const videoRef = useRef(null);
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const videoEl = videoRef.current;
    const handleMetadata = () => {
      setDuration(formatDuration(videoEl.duration));
    };
    if (videoEl) {
      videoEl.addEventListener("loadedmetadata", handleMetadata);
    }
    return () => {
      if (videoEl) {
        videoEl.removeEventListener("loadedmetadata", handleMetadata);
      }
    };
  }, []);

  return (
    <div className="video-card" onClick={onClick}>
      <img src={video.thumbnail} alt={video.title} className="thumbnail" />
      <video ref={videoRef} src={video.src} style={{ display: "none" }} />
      <div className="info">
        <span className="title">{video.title}</span>
        <span className="duration">{duration || "..."}</span>
      </div>
    </div>
  );
}

export default VideoCard;
