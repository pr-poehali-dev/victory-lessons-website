
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
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        setError(null); // Сбрасываем ошибку при попытке нового воспроизведения
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(err => {
            console.error("Ошибка воспроизведения видео:", err);
            setError("Не удалось воспроизвести видео. Возможно, формат не поддерживается вашим браузером.");
            setIsPlaying(false);
          });
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleVideoError = () => {
    setError("Ошибка загрузки видео. Пожалуйста, попробуйте позже.");
    setIsPlaying(false);
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-video">
      <video 
        ref={videoRef}
        className="w-full h-full object-contain"
        poster={video.thumbnail}
        preload="metadata"
        controls
        onEnded={handleVideoEnd}
        onError={handleVideoError}
      >
        <source src={video.src} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      
      {/* Отображение ошибки */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="text-white p-4 bg-red-700 rounded max-w-md text-center">
            <p>{error}</p>
            <Button 
              variant="outline" 
              className="mt-4 text-white border-white"
              onClick={() => setError(null)}
            >
              Закрыть
            </Button>
          </div>
        </div>
      )}
      
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
      {!isPlaying && !error && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer"
          onClick={togglePlay}
        >
          <div className="rounded-full bg-white bg-opacity-80 p-6">
            <Play className="h-12 w-12 text-red-600" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
