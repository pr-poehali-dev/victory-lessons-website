
// Типы данных для видео
export interface VideoItem {
  id: number;
  title: string;
  description: string;
  src: string;
  thumbnail: string;
  category: string;
}

// Данные видеохроники ВОВ с обновленными рабочими ссылками
export const videoArchives: VideoItem[] = [
  {
    id: 1,
    title: "Начало войны. Июнь 1941",
    description: "Кадры первых дней Великой Отечественной войны",
    src: "https://ia601600.us.archive.org/10/items/1941-1945/1941-1945.mp4",
    thumbnail: "https://cdn.pixabay.com/photo/2020/10/28/22/34/soldiers-5694568_1280.jpg",
    category: "Начало войны"
  },
  {
    id: 2,
    title: "Битва за Москву",
    description: "Хроника обороны Москвы и контрнаступления советских войск",
    src: "https://ia802702.us.archive.org/26/items/OdessaIsInFighting/MoscowStrikesBack1942.mp4",
    thumbnail: "https://cdn.pixabay.com/photo/2015/10/26/22/24/world-war-ii-1008290_1280.jpg",
    category: "Ключевые сражения"
  },
  {
    id: 3,
    title: "Сталинградская битва",
    description: "Документальные кадры сражения на Волге",
    src: "https://archive.org/download/Stalingrad_1943/Stalingrad_512kb.mp4",
    thumbnail: "https://cdn.pixabay.com/photo/2019/09/08/19/13/field-4461583_1280.jpg",
    category: "Ключевые сражения"
  },
  {
    id: 4,
    title: "День Победы",
    description: "Исторические кадры празднования Победы",
    src: "https://ia904604.us.archive.org/16/items/TheBattleOfBerlin/BerlinDownfall1945_512kb.mp4",
    thumbnail: "https://cdn.pixabay.com/photo/2018/05/05/07/29/sculpture-3375974_1280.jpg",
    category: "Победа"
  }
];

// Категории видео
export const categories = ["Все", "Начало войны", "Ключевые сражения", "Победа"];
