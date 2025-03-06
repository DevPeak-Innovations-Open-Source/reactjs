import { useRef, useState } from "react";
import { nature } from "../../assets";
import "./video.css";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video-container">
      <video ref={videoRef} src={nature} width="600" controls />
      <button onClick={handleTogglePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default VideoPlayer;
