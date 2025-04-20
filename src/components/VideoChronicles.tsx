import { useState } from "react";
import VideoPlayer from "./video/VideoPlayer";
import VideoList from "./video/VideoList";
import VideoHeader from "./video/VideoHeader";
import { videoArchives } from "./video/VideoData";

const VideoChronicles = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoArchives[0]);
  const [activeCategory, setActiveCategory] = useState("Все");

  const handleVideoSelect = (video: typeof videoArchives[0]) => {
    setSelectedVideo(video);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <VideoHeader 
          title="Видеохроника военных лет" 
          description="Документальные кадры времен Великой Отечественной войны — подлинное свидетельство героизма и стойкости советского народа."
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <VideoPlayer video={selectedVideo} />
            
            <div className="mt-4">
              <h3 className="text-2xl font-semibold mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-700">{selectedVideo.description}</p>
            </div>
          </div>
          
          <div>
            <VideoList 
              videos={videoArchives}
              selectedVideo={selectedVideo}
              activeCategory={activeCategory}
              onSelectVideo={handleVideoSelect}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoChronicles;
