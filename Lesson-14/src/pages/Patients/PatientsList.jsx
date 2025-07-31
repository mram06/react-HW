import { useGetPatientsByNameQuery, useGetPatientsQuery } from "@/api";
import PatientItem from "./PatientItem";
import { useNavigate } from "react-router";
import { frontRoutes } from "@/router/frontRoutes";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";

function PatientsList() {
  const [patientsList, setPatientsList] = useState([]);
  const { data: allPatientsList, isLoading } = useGetPatientsQuery();
  const navigate = useNavigate();
  const addNewPatient = () => {
    navigate(frontRoutes.navigate.patients.add);
  };

  const [searchValue, setSearchValue] = useState("");
  const { delayedValue } = useDebounce(searchValue);
  const { data: patientsListByName, isLoading: isPatientsByNameLoading } =
    useGetPatientsByNameQuery(delayedValue);

  useEffect(() => {
    if (!delayedValue) {
      setPatientsList(allPatientsList);
    } else {
      setPatientsList(patientsListByName);
    }
  }, [delayedValue, allPatientsList, patientsListByName]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Список пацієнтів
            </h1>
            <p className="text-gray-600">
              Керування інформацією про пацієнтів EMR системи
            </p>
          </div>
          <div>
            <button
              onClick={addNewPatient}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 shadow-sm"
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
              Додати нового пацієнта
            </button>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Пошук за ПІБ пацієнта"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm"
          />
          {searchValue && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                onClick={() => setSearchValue("")}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Завантаження...</span>
        </div>
      )}

      <div className="space-y-4">
        {patientsList?.map((patient) => (
          <PatientItem key={patient.id} patient={patient} />
        ))}
      </div>

      {!isLoading && (!patientsList || patientsList.length === 0) && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
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
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Немає пацієнтів
          </h3>
          <p className="text-gray-600">
            Почніть додавати пацієнтів до вашої EMR системи
          </p>
        </div>
      )}
    </div>
  );
}

export default PatientsList;
