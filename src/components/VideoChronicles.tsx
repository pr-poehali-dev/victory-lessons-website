import { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Данные видеохроники ВОВ
const videoArchives = [
  {
    id: 1,
    title: "Начало войны. Июнь 1941",
    description: "Кадры первых дней Великой Отечественной войны",
    src: "https://archive.org/download/WorldWarIiSovietFilmsAndNewsreels/SovietFilmsOfWorldWarIiBeginningGermanInvasionAndFirstBattles.mp4",
    thumbnail: "https://cdn.pixabay.com/photo/2020/10/28/22/34/soldiers-5694568_1280.jpg",
    category: "Начало войны"
  },
  {
    id: 2,
    title: "Битва за Москву",
    description: "Хроника обороны Москвы и контрнаступления советских войск",
    src: "https://archive.org/download/WorldWarIiSovietFilmsAndNewsreels/MoscowStrikesBack1942.mp4",
    thumbnail: "https://cdn.pixabay.com/photo/2015/10/26/22/24/world-war-ii-1008290_1280.jpg",
    category: "Ключевые сражения"
  },
  {
    id: 3,
    title: "Сталинградская битва",
    description: "Документальные кадры сражения на Волге",
    src: "https://archive.org/download/WorldWarIiSovietFilmsAndNewsreels/SovietFilmsOfWorldWarIiStalingradBattle.mp4",
    thumbnail: "https://cdn.pixabay.com/photo/2019/09/08/19/13/field-4461583_1280.jpg",
    category: "Ключевые сражения"
  },
  {
    id: 4,
    title: "День Победы",
    description: "Исторические кадры празднования Победы",
    src: "https://archive.org/download/WorldWarIiSovietFilmsAndNewsreels/BerlinRussianTroopsTakeTheCapitalMay1945.mp4",
    thumbnail: "https://cdn.pixabay.com/photo/2018/05/05/07/29/sculpture-3375974_1280.jpg",
    category: "Победа"
  }
];

// Категории видео
const categories = ["Все", "Начало войны", "Ключевые сражения", "Победа"];

const VideoChronicles = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoArchives[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Все");
  const videoRef = useState<HTMLVideoElement | null>(null);

  const handleVideoSelect = (video: typeof videoArchives[0]) => {
    setSelectedVideo(video);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (videoRef[0]) {
      if (isPlaying) {
        videoRef[0].pause();
      } else {
        videoRef[0].play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef[0]) {
      videoRef[0].muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const filteredVideos = activeCategory === "Все" 
    ? videoArchives
    : videoArchives.filter(video => video.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Видеохроника военных лет</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Документальные кадры времен Великой Отечественной войны — подлинное свидетельство героизма и стойкости советского народа.
          </p>
          <div className="h-1 w-20 bg-victory-red mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-video">
              <video 
                ref={(el) => { videoRef[0] = el; }}
                src={selectedVideo.src}
                poster={selectedVideo.thumbnail}
                className="w-full h-full object-contain"
                onClick={togglePlay}
                onEnded={() => setIsPlaying(false)}
                preload="metadata"
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
                    <h3 className="text-white font-medium truncate">{selectedVideo.title}</h3>
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
            
            <div className="mt-4">
              <h3 className="text-2xl font-semibold mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-700">{selectedVideo.description}</p>
            </div>
          </div>
          
          <div>
            <Tabs defaultValue="Все" className="w-full">
              <TabsList className="w-full grid grid-cols-4 mb-4">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className="px-2 py-1"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value={activeCategory} className="mt-0">
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                  {filteredVideos.map(video => (
                    <Card 
                      key={video.id}
                      className={`overflow-hidden cursor-pointer hover:shadow-md transition-shadow ${
                        selectedVideo.id === video.id ? 'border-2 border-victory-red' : ''
                      }`}
                      onClick={() => handleVideoSelect(video)}
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
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoChronicles;
