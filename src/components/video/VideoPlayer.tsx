
import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoItem } from "./VideoData";

interface VideoPlayerProps {
  video: VideoItem;
}

const VideoPlayer = ({ video }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error("Ошибка воспроизведения видео:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-video">
      <video 
        ref={videoRef}
        src={video.src}
        poster={video.thumbnail}
        className="w-full h-full object-contain"
        onClick={togglePlay}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
        controls
      ></video>
      
      {/* Управляющие элементы видео */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white hover:bg-opacity-20"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </Button>
          
          <div className="flex-1 mx-4">
            <h3 className="text-white font-medium truncate">{video.title}</h3>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white hover:bg-opacity-20"
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Оверлей для паузы */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer"
          onClick={togglePlay}
        >
          <div className="rounded-full bg-white bg-opacity-80 p-6">
            <Play className="h-12 w-12 text-victory-red" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
