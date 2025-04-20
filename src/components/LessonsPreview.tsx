import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Временные данные для предварительного просмотра уроков
const lessonPreviews = [
  {
    id: 1,
    title: "Битва за Москву",
    description: "Урок о переломном моменте в начале войны и героической обороне столицы.",
    image: "/placeholder.svg",
    date: "5 декабря",
    category: "Великие сражения"
  },
  {
    id: 2,
    title: "Герои Сталинграда",
    description: "Рассказ о защитниках города на Волге и величайшем сражении Второй мировой.",
    image: "/placeholder.svg",
    date: "2 февраля",
    category: "Великие сражения"
  },
  {
    id: 3,
    title: "Подвиг медиков",
    description: "История о врачах и медсестрах, спасавших жизни на передовой и в тылу.",
    image: "/placeholder.svg",
    date: "12 мая",
    category: "Герои тыла"
  }
];

const LessonsPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Наши уроки</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Познакомьтесь с нашими образовательными материалами о подвигах и героизме 
            защитников Отечества разных эпох.
          </p>
          <div className="h-1 w-20 bg-victory-red mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessonPreviews.map((lesson) => (
            <Card key={lesson.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${lesson.image})` }}
              ></div>
              
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500">{lesson.category}</span>
                  <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">
                    {lesson.date}
                  </span>
                </div>
                <CardTitle className="font-display">{lesson.title}</CardTitle>
                <CardDescription>{lesson.description}</CardDescription>
              </CardHeader>
              
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/lessons/${lesson.id}`}>Подробнее</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/lessons">Все уроки</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LessonsPreview;
