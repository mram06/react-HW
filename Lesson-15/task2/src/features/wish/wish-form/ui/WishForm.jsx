export function WishForm({
  title,
  onTitleChange,
  friend,
  onFriendChange,
  goalYear,
  onGoalYearChange,
  onSubmit,
  onDismiss,
  isNew,
  isSubmitting,
}) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {isNew ? "✨ Додати нову мрію" : "✨ Змінити мрію"}
        </h1>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Назва мрії
            </label>
            <input
              value={title}
              onChange={onTitleChange}
              type="text"
              id="title"
              name="title"
              required
              className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
              placeholder="Введіть назву вашої мрії..."
            />
          </div>

          <div>
            <label
              htmlFor="friend"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Друг з яким хочу досягти
            </label>
            <input
              value={friend}
              onChange={onFriendChange}
              type="text"
              id="friend"
              name="friend"
              required
              className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
              placeholder="Введіть ім'я друга..."
            />
          </div>

          <div>
            <label
              htmlFor="goalYear"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Рік коли хочу досягти
            </label>
            <input
              value={goalYear}
              onChange={onGoalYearChange}
              type="number"
              id="goalYear"
              name="goalYear"
              required
              min={new Date().getFullYear()}
              max={new Date().getFullYear() + 50}
              className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
              placeholder="2025"
            />
          </div>

          <div className="flex gap-4 pt-6">
            <button
              onClick={onDismiss}
              disabled={isSubmitting}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Скасувати
            </button>

            <button
              onClick={onSubmit}
              disabled={isSubmitting}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {isNew ? "Створення..." : "Оновлення..."}
                </>
              ) : isNew ? (
                "💫 Створити мрію"
              ) : (
                "💫 Змінити мрію"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
