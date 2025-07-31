import { useDeletePatientMutation } from "@/api";
import { frontRoutes } from "@/router/frontRoutes";
import { useNavigate } from "react-router";

function PatientItem({ patient }) {
  const [deletePatient, { isLoading }] = useDeletePatientMutation();
  const onDelete = () => {
    deletePatient(patient.id);
  };

  const navigate = useNavigate();
  const onEdit = () => {
    navigate(frontRoutes.navigate.patients.edit(patient.id));
  };
  const toMedicalCard = () => {
    navigate(frontRoutes.navigate.patients.medicalCard(patient.id));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 mb-4">
      {/* Header with patient name */}
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
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {patient.fullName}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Patient ID: #{patient.id || "N/A"}</span>
              {patient.birthDate && (
                <span>
                  Народився:{" "}
                  {new Date(patient.birthDate).toLocaleDateString("uk-UA")}
                </span>
              )}
              {patient.gender && (
                <span>
                  {patient.gender === "male"
                    ? "Чоловік"
                    : patient.gender === "female"
                    ? "Жінка"
                    : "Інша стать"}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={toMedicalCard}
            className="px-3 py-1 text-sm text-green-600 hover:text-green-800 hover:bg-green-50 rounded-md transition-colors duration-200 font-medium flex items-center space-x-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>Медкарта</span>
          </button>
          <button
            onClick={onEdit}
            className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors duration-200 font-medium"
          >
            Змінити
          </button>
          <button
            onClick={onDelete}
            className="px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors duration-200 font-medium"
          >
            {isLoading ? "Видалення..." : "Видалити"}
          </button>
        </div>
      </div>

      {/* Patient contact information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-gray-900 font-medium">
              {patient.phone || "No phone provided"}
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
              {patient.email || "No email provided"}
            </p>
          </div>
        </div>

        {/* Address Section */}
        {patient.address && (
          <div className="md:col-span-2 flex items-start space-x-3 mt-4">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
              <svg
                className="w-4 h-4 text-orange-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Адреса</p>
              <p className="text-gray-900 font-medium">{patient.address}</p>
            </div>
          </div>
        )}
      </div>

      {/* Patient notes */}
      {patient.notes && (
        <div className="border-t border-gray-100 pt-4">
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
              <p className="text-sm text-gray-500 mb-1">Notes</p>
              <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 rounded-md p-3">
                {patient.notes}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Status indicator */}
      <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-sm text-gray-500">Active Patient</span>
        </div>
      </div>
    </div>
  );
}

export default PatientItem;
