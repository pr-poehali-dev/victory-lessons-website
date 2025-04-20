import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Данные исторических фотографий
const historicalPhotos = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2018/07/09/05/49/victory-day-3525401_1280.jpg",
    alt: "Победа в Великой Отечественной войне",
    caption: "Знамя Победы над Рейхстагом"
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2016/02/29/02/51/war-1227869_1280.jpg",
    alt: "Солдаты в окопе",
    caption: "Советские солдаты в окопе при обороне"
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2016/03/08/08/59/tank-1243768_1280.jpg",
    alt: "Танк Т-34",
    caption: "Легендарный танк Т-34 на поле боя"
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2013/02/20/15/25/battle-of-stalingrad-83590_1280.jpg",
    alt: "Сталинградская битва",
    caption: "Бои за Сталинград, 1942-1943 гг."
  },
  {
    id: 5,
    src: "https://cdn.pixabay.com/photo/2018/05/09/11/42/victory-day-3385730_1280.jpg",
    alt: "Парад Победы",
    caption: "Первый парад Победы на Красной площади"
  },
  {
    id: 6,
    src: "https://cdn.pixabay.com/photo/2023/06/06/02/23/victory-day-8045075_1280.jpg",
    alt: "Ветераны ВОВ",
    caption: "Ветераны Великой Отечественной войны на параде"
  }
];

const HistoricalGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({
    src: "",
    alt: "",
    caption: ""
  });

  const openModal = (index: number) => {
    setModalImage(historicalPhotos[index]);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleNext = () => {
    const newIndex = modalImage.id < historicalPhotos.length ? 
      historicalPhotos.findIndex(photo => photo.id === modalImage.id) + 1 : 
      0;
    
    if (newIndex < historicalPhotos.length) {
      setModalImage(historicalPhotos[newIndex]);
    } else {
      setModalImage(historicalPhotos[0]);
    }
  };

  const handlePrev = () => {
    const newIndex = modalImage.id > 1 ? 
      historicalPhotos.findIndex(photo => photo.id === modalImage.id) - 1 : 
      historicalPhotos.length - 1;
    
    if (newIndex >= 0) {
      setModalImage(historicalPhotos[newIndex]);
    } else {
      setModalImage(historicalPhotos[historicalPhotos.length - 1]);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Фотохроника военных лет</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Подлинные фотографии времен Великой Отечественной войны, запечатлевшие героизм и стойкость советского народа.
          </p>
          <div className="h-1 w-20 bg-victory-red mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {historicalPhotos.map((photo, index) => (
            <div 
              key={photo.id} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform"
              onClick={() => openModal(index)}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2 text-white text-sm">
                  {photo.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно для просмотра изображений */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative max-w-6xl w-full mx-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 z-10"
              onClick={closeModal}
            >
              <X size={24} />
            </Button>
            
            <div className="flex items-center justify-center mb-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full mx-2"
                onClick={handlePrev}
              >
                <ChevronLeft size={36} />
              </Button>
              
              <div className="relative">
                <img 
                  src={modalImage.src} 
                  alt={modalImage.alt} 
                  className="max-h-[80vh] max-w-full object-contain"
                />
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full mx-2"
                onClick={handleNext}
              >
                <ChevronRight size={36} />
              </Button>
            </div>
            
            <div className="text-center text-white py-2 px-4 bg-black bg-opacity-70 rounded-lg">
              <p className="text-xl">{modalImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HistoricalGallery;
