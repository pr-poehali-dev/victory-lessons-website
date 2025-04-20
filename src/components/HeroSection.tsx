import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      {/* Фоновое изображение с затемнением */}
      <div 
        className="absolute inset-0 bg-black opacity-50 z-10"
        aria-hidden="true"
      ></div>
      
      {/* Изображение победного знамени (заглушка) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg')" }}
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Уроки Победы
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Образовательный проект в рамках 80-летия Победы в Великой Отечественной войне
            и Года Защитника Отечества
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-victory-red hover:bg-red-800 text-white font-medium text-base"
            >
              <Link to="/lessons">Смотреть уроки</Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors font-medium text-base"
            >
              <Link to="/about">О проекте</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
