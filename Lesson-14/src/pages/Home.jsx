function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
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
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          EMR System
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Електронна медична документація призначена для ефективного управління
          інформацією про пацієнтів, оптимізації робочих процесів та покращення
          якості медичної допомоги в сучасних медичних закладах.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Patient Management */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Управління пацієнтами
          </h3>
          <p className="text-gray-600">
            Зберігання та управління повною інформацією про пацієнтів, включаючи
            персональні дані, контактну інформацію та медичну історію.
          </p>
        </div>

        {/* Doctor Management */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            База лікарів
          </h3>
          <p className="text-gray-600">
            Каталог медичного персоналу з інформацією про спеціалізації, графіки
            роботи та контактні дані для ефективної координації.
          </p>
        </div>

        {/* Appointments */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Записи на прийом
          </h3>
          <p className="text-gray-600">
            Планування та управління записами пацієнтів на консультації,
            контроль графіків та нагадування про майбутні візити.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Переваги нашої EMR системи
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <svg
                className="w-4 h-4 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Безпека даних
              </h4>
              <p className="text-gray-600">
                Захищене зберігання медичної інформації відповідно до стандартів
                HIPAA
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <svg
                className="w-4 h-4 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Швидкий доступ
              </h4>
              <p className="text-gray-600">
                Миттєвий пошук та отримання інформації про пацієнтів
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <svg
                className="w-4 h-4 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Інтуїтивний інтерфейс
              </h4>
              <p className="text-gray-600">
                Зручний та зрозумілий дизайн для медичного персоналу
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <svg
                className="w-4 h-4 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Автоматизація
              </h4>
              <p className="text-gray-600">
                Скорочення паперової роботи та автоматизація рутинних процесів
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Довіртесь професіоналам
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">Надійність системи</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Технічна підтримка</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-600">Медичних закладів</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
