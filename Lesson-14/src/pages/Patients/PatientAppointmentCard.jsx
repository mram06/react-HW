import { useGetDoctorByIdQuery } from "@/api";

function PatientAppointmentCard({ appointmentData }) {
  const {
    data: foundDoctor,
    isLoading: isDoctorLoading,
    error: errorDoctor,
  } = useGetDoctorByIdQuery(appointmentData.doctorId);

  if (isDoctorLoading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-4">
        <div className="animate-pulse">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (errorDoctor) {
    return (
      <div className="bg-white rounded-lg border border-red-200 shadow-sm p-6 mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-red-600"
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
          <div>
            <p className="text-sm text-gray-600">
              Помилка завантаження даних лікаря
            </p>
            <p className="text-xs text-gray-500">
              ID: {appointmentData.doctorId}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Форматування дати та часу
  const appointmentDate = new Date(appointmentData.date);
  const formattedDate = appointmentDate.toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const formattedTime = appointmentDate.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Визначення статусу та кольору
  const getStatusConfig = (status) => {
    switch (status) {
      case "active":
        return {
          color: "text-green-700",
          bg: "bg-green-100",
          border: "border-green-200",
          label: "Активний",
        };
      case "completed":
        return {
          color: "text-blue-700",
          bg: "bg-blue-100",
          border: "border-blue-200",
          label: "Завершений",
        };
      case "cancelled":
        return {
          color: "text-red-700",
          bg: "bg-red-100",
          border: "border-red-200",
          label: "Скасований",
        };
      default:
        return {
          color: "text-gray-700",
          bg: "bg-gray-100",
          border: "border-gray-200",
          label: "Невідомий",
        };
    }
  };

  const statusConfig = getStatusConfig(appointmentData.status);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 mb-4">
      {/* Header з датою та статусом */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-600"
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
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Запис на прийом
            </h3>
            <p className="text-sm text-gray-500">ID: #{appointmentData.id}</p>
          </div>
        </div>
        <div
          className={`px-3 py-1 rounded-full text-sm font-medium ${statusConfig.bg} ${statusConfig.color} ${statusConfig.border} border`}
        >
          {statusConfig.label}
        </div>
      </div>

      {/* Основна інформація */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Дата та час */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Дата і час</p>
            <p className="text-gray-900 font-medium">{formattedDate}</p>
            <p className="text-blue-600 font-semibold">{formattedTime}</p>
          </div>
        </div>

        {/* Лікар */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-green-600"
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
          <div>
            <p className="text-sm text-gray-500">Лікар</p>
            <p className="text-gray-900 font-medium">
              {foundDoctor?.fullName || "Завантаження..."}
            </p>
            {foundDoctor && (
              <p className="text-green-600 text-sm">ID: #{foundDoctor.id}</p>
            )}
          </div>
        </div>
      </div>

      {/* Причина візиту */}
      {appointmentData.reason && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
              <svg
                className="w-4 h-4 text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 mb-1">
                Причина візиту
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {appointmentData.reason}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Додаткові дії (якщо потрібно) */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Створено:{" "}
              {new Date(appointmentData.date).toLocaleDateString("uk-UA")}
            </span>
          </div>
          {appointmentData.status === "active" && (
            <div className="flex items-center space-x-1 text-xs text-green-600">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Очікується</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PatientAppointmentCard;
