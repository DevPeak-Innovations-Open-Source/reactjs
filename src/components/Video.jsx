import { useRef, useState } from "react";
import { nature } from "."; 
import "./video.css"; 

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); 

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
      
      <video ref={videoRef} className="video" src={nature} />

      
      <button className="play-button" onClick={handleTogglePlay}>
        {isPlaying ? (
          
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="play-icon"
          >
            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5" />
            <rect x="9" y="8" width="3" height="8" fill="#ffffff" />
            <rect x="13" y="8" width="3" height="8" fill="#ffffff" />
          </svg>
        ) : (
          
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="play-icon"
          >
            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5" />
            <path
              d="M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
