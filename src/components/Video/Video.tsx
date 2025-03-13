import { useRef, useState } from "react";
import { nature } from "../../assets";
import "./video.css";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <div className="video-container">
      <video ref={videoRef} src={nature} width="600" controls />
    </div>
  );
};

export default VideoPlayer;
