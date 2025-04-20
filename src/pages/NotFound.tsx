import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-16">
          <h1 className="text-9xl font-display font-bold text-victory-red mb-4">404</h1>
          <h2 className="text-3xl font-medium mb-6">Страница не найдена</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            К сожалению, запрашиваемая вами страница не существует или была перемещена.
          </p>
          <Button asChild size="lg">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
