
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoItem, categories } from "./VideoData";

interface VideoListProps {
  videos: VideoItem[];
  selectedVideo: VideoItem;
  activeCategory: string;
  onSelectVideo: (video: VideoItem) => void;
  onCategoryChange: (category: string) => void;
}

const VideoList = ({ 
  videos, 
  selectedVideo, 
  activeCategory, 
  onSelectVideo, 
  onCategoryChange 
}: VideoListProps) => {
  
  const filteredVideos = activeCategory === "Все" 
    ? videos
    : videos.filter(video => video.category === activeCategory);

  return (
    <Tabs defaultValue="Все" className="w-full">
      <TabsList className="w-full grid grid-cols-4 mb-4">
        {categories.map(category => (
          <TabsTrigger 
            key={category} 
            value={category}
            onClick={() => onCategoryChange(category)}
            className="px-2 py-1"
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
      
      <TabsContent value={activeCategory} className="mt-0">
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
          {filteredVideos.map(video => (
            <VideoCard 
              key={video.id}
              video={video}
              isSelected={selectedVideo.id === video.id}
              onSelect={() => onSelectVideo(video)}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

interface VideoCardProps {
  video: VideoItem;
  isSelected: boolean;
  onSelect: () => void;
}

const VideoCard = ({ video, isSelected, onSelect }: VideoCardProps) => {
  return (
    <Card 
      className={`overflow-hidden cursor-pointer hover:shadow-md transition-shadow ${
        isSelected ? 'border-2 border-victory-red' : ''
      }`}
      onClick={onSelect}
    >
      <CardContent className="p-0">
        <div className="flex">
          <div className="w-1/3">
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className="w-full h-24 object-cover"
            />
          </div>
          <div className="w-2/3 p-3">
            <h4 className="font-medium truncate">{video.title}</h4>
            <p className="text-sm text-gray-500 truncate">{video.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoList;
