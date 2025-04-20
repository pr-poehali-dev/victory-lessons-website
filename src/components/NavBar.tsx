import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-victory-red">
              <span className="text-white font-bold">УП</span>
            </div>
            <div className="font-display font-bold text-xl">Уроки Победы</div>
          </Link>
          
          {/* Мобильное меню кнопка */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Меню"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          
          {/* Десктоп меню */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">
              О проекте
            </Link>
            <Link to="/lessons" className="font-medium hover:text-primary transition-colors">
              Уроки
            </Link>
            <Link to="/heroes" className="font-medium hover:text-primary transition-colors">
              Герои
            </Link>
            <Link to="/contacts" className="font-medium hover:text-primary transition-colors">
              Контакты
            </Link>
            <Button variant="default">Записаться на урок</Button>
          </div>
        </div>
        
        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <Link 
              to="/"
              className="block py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Главная
            </Link>
            <Link 
              to="/about"
              className="block py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              О проекте
            </Link>
            <Link 
              to="/lessons"
              className="block py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Уроки
            </Link>
            <Link 
              to="/heroes"
              className="block py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Герои
            </Link>
            <Link 
              to="/contacts"
              className="block py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Контакты
            </Link>
            <div className="pt-2">
              <Button className="w-full">Записаться на урок</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
