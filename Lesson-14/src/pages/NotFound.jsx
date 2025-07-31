function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        {/* 404 Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Сторінку не знайдено
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            На жаль, сторінка яку ви шукаєте не існує або була переміщена.
            Перевірте правильність адреси або поверніться на головну сторінку
            EMR системи.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0L2.586 11l3.707-3.707a1 1 0 011.414 1.414L5.414 11l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M5 11a1 1 0 011-1h10a1 1 0 110 2H6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Повернутися назад
          </button>

          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 001.414 1.414L8 5.414V17a1 1 0 002 0V5.414l6.293 6.293a1 1 0 001.414-1.414l-9-9z" />
            </svg>
            На головну сторінку
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
