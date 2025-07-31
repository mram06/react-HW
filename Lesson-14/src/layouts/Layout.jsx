import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-auto bg-gray-50">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11a1 1 0 11-2 0 1 1 0 012 0zm-1-2.5a2.5 2.5 0 000-5 .5.5 0 000 1 1.5 1.5 0 000 3 .5.5 0 000 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  EMR System
                </h3>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Електронна медична документація для ефективного управління
                даними пацієнтів та покращення якості медичної допомоги.
              </p>
              <div className="flex space-x-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Secure
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  HIPAA Compliant
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Швидкі посилання
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Пацієнти
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Лікарі
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Записи на прийом
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Звіти
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Підтримка
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Документація
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Технічна підтримка
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Конфіденційність
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Умови використання
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-600 mb-4 md:mb-0">
                © 2025 EMR System. Всі права захищені.
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Система працює</span>
                </div>
                <div className="text-sm text-gray-600">Версія 1.0.0</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
