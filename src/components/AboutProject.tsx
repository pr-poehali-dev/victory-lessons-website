import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award } from "lucide-react";

const AboutProject = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">О проекте «Уроки Победы»</h2>
          <div className="h-1 w-20 bg-victory-red mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-6">
              Образовательный проект «Уроки Победы» был создан в рамках объявления 2025 года — 
              Годом Защитника Отечества и 80-летия Победы в Великой Отечественной войне.
            </p>
            <p className="text-lg mb-6">
              В рамках проекта проводятся онлайн и офлайн уроки для обучающихся школ, 
              каждое занятие — это уникальное путешествие, рассказывающее о героях 
              Красной Армии и их подвигах во время Великой Отечественной войны, а также 
              о героях нашего времени — героях СВО.
            </p>
            
            <Button asChild className="mt-4">
              <Link to="/about">Подробнее о проекте</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="bg-victory-red rounded-full p-3 text-white mr-4">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Уникальная программа</h3>
                  <p className="text-gray-700">
                    Каждый урок разработан с учётом возрастных особенностей и включает
                    интерактивные материалы, документальные свидетельства и личные истории.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="bg-victory-red rounded-full p-3 text-white mr-4">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Для всех возрастов</h3>
                  <p className="text-gray-700">
                    Проект охватывает все возрастные группы школьников, от младших классов
                    до старшеклассников, с адаптированной подачей материала.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="bg-victory-red rounded-full p-3 text-white mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Память о героях</h3>
                  <p className="text-gray-700">
                    Мы рассказываем не только о знаменитых полководцах, но и о простых 
                    солдатах, чьи поступки изменили ход истории.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
