import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Уроки Победы</h3>
            <p className="text-gray-300 mb-4">
              Образовательный проект, посвященный 80-летию Победы в Великой Отечественной войне
              и Году Защитника Отечества.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">ВКонтакте</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 16.615h-1.616c-.607 0-.801-.469-1.898-1.566-1.008-.929-1.412-1.052-1.656-1.052-.345 0-.426.098-.426.566v1.417c0 .401-.209.635-.785.635-1.155 0-2.438-.098-3.803-1.488-1.596-1.598-2.539-3.676-2.539-4.107 0-.221.098-.426.566-.426h1.626c.388 0 .566.196.729.635.802 2.301 2.149 4.212 2.703 4.212.21 0 .307-.098.307-.635v-2.469c-.049-.953-.572-1.042-.572-1.382 0-.172.147-.344.38-.344h2.561c.345 0 .468.196.468.615v3.341c0 .369.147.492.245.492.21 0 .369-.123.762-.516 1.155-1.333 1.989-3.341 1.989-3.341.111-.237.357-.452.738-.452h1.625c.492 0 .591.258.492.615-.21.982-2.235 3.928-2.235 3.928-.17.284-.24.406 0 .714.172.221.738.689 1.106 1.106.761.834 1.332 1.538 1.478 2.021.172.492-.086.738-.578.738z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Телеграм</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/lessons" className="text-gray-300 hover:text-white transition-colors">
                  Уроки
                </Link>
              </li>
              <li>
                <Link to="/heroes" className="text-gray-300 hover:text-white transition-colors">
                  Герои
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p>г. Москва, ул. Примерная, д. 123</p>
              <p>
                <a href="tel:+78001234567" className="hover:text-white transition-colors">
                  +7 (800) 123-45-67
                </a>
              </p>
              <p>
                <a href="mailto:info@урокипобеды.рф" className="hover:text-white transition-colors">
                  info@урокипобеды.рф
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-center text-sm">
          <p>© {currentYear} Образовательный проект «Уроки Победы». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
