import { Link } from "react-router";

function HomePage() {
  return (
    <div className="text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold  mb-6">
          ✨ Ласкаво просимо до Wishes Planning!
        </h1>

        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
          Створюйте, відстежуйте та втілюйте свої мрії разом з друзями.
          Перетворіть мрії на реальність з нашим планувальником бажань.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Ставте цілі
            </h3>
            <p className="text-gray-600">
              Визначте свої мрії та встановіть терміни їх досягнення
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">👫</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Знаходьте підтримку
            </h3>
            <p className="text-gray-600">
              Залучайте друзів до своїх планів та досягайте більшого разом
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Досягайте успіху
            </h3>
            <p className="text-gray-600">
              Крок за кроком наближайтесь до своїх цілей
            </p>
          </div>
        </div>

        <div className="bg-indigo-600 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Готові почати?</h2>
          <p className="mb-6">
            Створіть свою першу мрію та почніть шлях до її втілення!
          </p>
          <Link
            to="/wishes"
            className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Переглянути мрії
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
