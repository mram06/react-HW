import { useDeleteDoctorMutation } from "@/api";
import { frontRoutes } from "@/router/frontRoutes";
import { useNavigate } from "react-router";

function DoctorCard({ doctorData }) {
  const navigate = useNavigate();

  const [deleteDoctor, { isLoading, error }] = useDeleteDoctorMutation();
  const onDeleteDoctor = () => {
    deleteDoctor(doctorData.id);
  };

  const onEdit = () => {
    navigate(frontRoutes.navigate.doctors.edit(doctorData.id));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 mb-4">
      {/* Header with doctor name and specialty */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border border-blue-500 flex items-center justify-center">
              <svg
                className="w-2.5 h-2.5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {doctorData.fullName}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">
                ID: #{doctorData.id || "N/A"}
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {doctorData.specialty || "Загальна практика"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={onEdit}
            className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors duration-200 font-medium"
          >
            Змінити
          </button>
          <button
            onClick={onDeleteDoctor}
            className="px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors duration-200 font-medium"
          >
            {isLoading ? "Видалення..." : "Видалити"}
          </button>
        </div>
      </div>

      {/* Doctor contact information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Телефон</p>
            <p className="text-gray-900 font-medium">
              {doctorData.phone || "Не вказано"}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-gray-900 font-medium">
              {doctorData.email || "Не вказано"}
            </p>
          </div>
        </div>

        {/* Room Information */}
        {doctorData.room && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2h2v4H7V6zm6 0h2v4h-2V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Кабінет</p>
              <p className="text-gray-900 font-medium">№{doctorData.room}</p>
            </div>
          </div>
        )}
      </div>

      {/* Doctor notes */}
      {doctorData.notes && (
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mt-1">
              <svg
                className="w-4 h-4 text-gray-600"
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
              <p className="text-sm text-gray-500 mb-1">Додаткова інформація</p>
              <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 rounded-md p-3">
                {doctorData.notes}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Status indicator */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-sm text-gray-500">Активний лікар</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <span>Медичний персонал</span>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
