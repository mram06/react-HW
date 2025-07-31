import { useState } from "react";
import {
  useDeleteAppointmentMutation,
  useGetDoctorByIdQuery,
  useGetPatientByIdQuery,
  useUpdateAppointmentMutation,
} from "@/api";
import { getStatusStyles, formatDate, formatTime } from "./utils";
import { useNavigate } from "react-router";
import { frontRoutes } from "@/router/frontRoutes";

function AppointmentItem({ appointmentData }) {
  const {
    data: foundPatient,
    isLoading: isPatientLoading,
    error: errorPatient,
  } = useGetPatientByIdQuery(appointmentData.patientId);
  const {
    data: foundDoctor,
    isLoading: isDoctorLoading,
    error: errorDoctor,
  } = useGetDoctorByIdQuery(appointmentData.doctorId);

  const filledAppointmentData = {
    ...appointmentData,
    patientFullName: foundPatient?.fullName,
    doctorFullName: foundDoctor?.fullName,
  };
  const [
    updateAppointment,
    { isLoading: isUpdateLoading, error: errorUpdating },
  ] = useUpdateAppointmentMutation();
  const [
    deleteAppointment,
    { isLoading: isDeleteLoading, error: errorDeleting },
  ] = useDeleteAppointmentMutation();
  const onDeleteAppointment = () => {
    deleteAppointment(appointmentData.id);
  };

  const navigate = useNavigate();
  const onEditAppointment = () => {
    navigate(frontRoutes.navigate.appointments.edit(appointmentData.id));
  };

  const [currentStatus, setCurrentStatus] = useState(appointmentData.status);
  const [isUpdating, setIsUpdating] = useState(false);

  const statusStyle = getStatusStyles(currentStatus);

  const statusOptions = [
    { value: "scheduled", label: "Заплановано" },
    { value: "active", label: "Активний" },
    { value: "completed", label: "Завершено" },
    { value: "cancelled", label: "Скасовано" },
  ];

  const handleStatusChange = async (newStatus) => {
    if (newStatus === currentStatus) return;

    try {
      await updateAppointment({ id: appointmentData.id, status: newStatus });
      setCurrentStatus(newStatus);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 mb-4">
      {/* Header with appointment info and status */}
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
              Запис #{filledAppointmentData.id}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">
                {formatDate(filledAppointmentData.date)}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-500">
                {formatTime(filledAppointmentData.date)}
              </span>
            </div>
          </div>
        </div>

        {/* Status Select */}
        <div className="relative">
          <select
            value={currentStatus}
            onChange={(e) => handleStatusChange(e.target.value)}
            disabled={isUpdateLoading}
            className={`appearance-none cursor-pointer px-4 py-2 pr-8 rounded-lg text-sm font-medium border-0 outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
              statusStyle.bg
            } ${statusStyle.text} ${
              isUpdateLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            {isUpdateLoading ? (
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <svg
                className="w-4 h-4 text-current"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Patient Info */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-green-600"
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
            <p className="text-sm text-gray-500">Пацієнт</p>
            <p className="text-gray-900 font-medium">
              {filledAppointmentData.patientFullName ?? "Невідомо"} (ID:{" "}
              {filledAppointmentData.patientId})
            </p>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Лікар</p>
            <p className="text-gray-900 font-medium">
              {filledAppointmentData.doctorFullName ?? "Невідомо"} (ID:{" "}
              {filledAppointmentData.doctorId})
            </p>
          </div>
        </div>
      </div>

      {/* Reason for visit */}
      {appointmentData.reason && (
        <div className="border-t border-gray-100 pt-4 mb-4">
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
              <p className="text-sm text-gray-500 mb-1">Причина візиту</p>
              <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 rounded-md p-3">
                {appointmentData.reason}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <span>Медичний запис</span>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onEditAppointment}
            className="px-3 py-1 text-sm text-green-600 hover:text-green-800 hover:bg-green-50 rounded-md transition-colors duration-200 font-medium"
          >
            Змінити
          </button>
          <button
            onClick={onDeleteAppointment}
            className="px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors duration-200 font-medium"
          >
            Видалити
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentItem;
