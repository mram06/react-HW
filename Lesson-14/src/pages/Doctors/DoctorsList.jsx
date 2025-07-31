import { useGetDoctorsQuery } from "@/api";
import DoctorCard from "./DoctorCard";
import { useNavigate } from "react-router";
import { frontRoutes } from "@/router/frontRoutes";

function DoctorsList() {
  const { data: doctorsList, isLoading } = useGetDoctorsQuery();

  const navigate = useNavigate();
  const addNewDoctor = () => {
    navigate(frontRoutes.navigate.doctors.add);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Список лікарів
            </h1>
            <p className="text-gray-600">
              Керування інформацією про медичний персонал EMR системи
            </p>
          </div>
          <div>
            <button
              onClick={addNewDoctor}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 shadow-sm"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Додати нового лікаря
            </button>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          <span className="ml-3 text-gray-600">Завантаження...</span>
        </div>
      )}

      {/* Doctors Grid */}
      <div className="space-y-4">
        {doctorsList?.map((doctor) => (
          <DoctorCard key={doctor.id} doctorData={doctor} />
        ))}
      </div>

      {/* Empty State */}
      {!isLoading && (!doctorsList || doctorsList.length === 0) && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9V6a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Немає лікарів
          </h3>
          <p className="text-gray-600">
            Почніть додавати лікарів до вашої EMR системи
          </p>
        </div>
      )}

      {/* Statistics Summary */}
      {!isLoading && doctorsList && doctorsList.length > 0 && (
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
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
              <p className="text-sm font-medium text-green-900">
                Загалом медичного персоналу: {doctorsList.length}
              </p>
              <p className="text-xs text-green-700">
                Всі лікарі активні та готові до прийому пацієнтів
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DoctorsList;
