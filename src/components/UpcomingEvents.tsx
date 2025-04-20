import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

// Временные данные о предстоящих мероприятиях
const upcomingEvents = [
  {
    id: 1,
    title: "Онлайн-урок «Ленинград непокорённый»",
    date: "27 января 2025",
    time: "14:00",
    type: "Онлайн",
    format: "Для 6-8 классов"
  },
  {
    id: 2,
    title: "Встреча с ветеранами СВО",
    date: "23 февраля 2025",
    time: "12:00",
    type: "Офлайн",
    format: "Для всех классов",
    location: "Центральный музей Вооруженных сил"
  },
  {
    id: 3,
    title: "Урок Победы «Курская дуга»",
    date: "15 марта 2025",
    time: "10:00",
    type: "Онлайн",
    format: "Для 9-11 классов"
  }
];

const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Предстоящие мероприятия</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Расписание ближайших уроков и встреч в рамках проекта «Уроки Победы».
            Присоединяйтесь к нам онлайн или офлайн!
          </p>
          <div className="h-1 w-20 bg-victory-red mx-auto mt-4"></div>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-gray-50 rounded-lg shadow-sm p-6 border border-gray-100 flex flex-col md:flex-row gap-6"
            >
              <div className="flex-shrink-0 flex flex-col items-center justify-center bg-victory-red text-white rounded-lg p-4 w-full md:w-32 h-32">
                <Calendar className="h-8 w-8 mb-2" />
                <div className="text-center">
                  <div className="font-bold text-xl">{event.date.split(' ')[0]}</div>
                  <div className="text-sm">{event.date.split(' ').slice(1).join(' ')}</div>
                  <div className="mt-1 font-medium">{event.time}</div>
                </div>
              </div>
              
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-xs font-medium">
                      {event.type}
                    </span>
                    <span className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-xs font-medium">
                      {event.format}
                    </span>
                    {event.location && (
                      <span className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-xs font-medium">
                        {event.location}
                      </span>
                    )}
                  </div>
                </div>
                
                <Button variant="outline">Записаться</Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Все мероприятия
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
