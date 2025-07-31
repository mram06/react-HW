import {
  useGetPatientsQuery,
  useGetDoctorsQuery,
  useAddAppointmentMutation,
  useGetAppointmentByIdQuery,
  useUpdateAppointmentMutation,
} from "@/api";
import { useEffect, useState } from "react";
import { emptyAppointmentData } from "./settings";
import { useNavigate, useParams } from "react-router";
import { frontRoutes } from "@/router/frontRoutes";

function AppointmentForm() {
  const { id } = useParams();
  const {
    data: appointmentData,
    isLoading: isAppointmentLoading,
    error: errorAppointment,
  } = useGetAppointmentByIdQuery(id);
  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, ...appointmentData }));
  }, [appointmentData]);

  const {
    data: patientsList,
    isLoading: isPatientsLoading,
    error: errorPatients,
  } = useGetPatientsQuery();
  const {
    data: doctorsList,
    isLoading: isDoctorsLoading,
    error: errorDoctors,
  } = useGetDoctorsQuery();

  const [formData, setFormData] = useState(() => emptyAppointmentData);
  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const [addAppointment, { isLoading: isAddLoading, error: errorAdding }] =
    useAddAppointmentMutation();
  const [
    updateAppointment,
    { isLoading: isUpdateLoading, error: errorUpdating },
  ] = useUpdateAppointmentMutation();

  const navigate = useNavigate();
  const isLoading = isAddLoading || isUpdateLoading;

  const onSave = async () => {
    if (id) {
      try {
        await updateAppointment(formData);
      } catch (error) {
        return console.log(error);
      }
    } else {
      try {
        await addAppointment({ ...formData, status: "scheduled" });
      } catch (error) {
        return console.log(error);
      }
    }
    navigate(frontRoutes.navigate.appointments.base);
  };

  const onDismiss = () => {
    navigate(frontRoutes.navigate.appointments.base);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600"
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
                <h1 className="text-2xl font-bold text-gray-900">
                  {id ? "Змінити дані про запис" : "Новий запис до лікаря"}
                </h1>
                <p className="text-sm text-gray-500">
                  {id
                    ? "Відредагуйте дані про медичний запис"
                    : "Заповніть форму для створення нового медичного запису"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State for Appointment Data */}
        {isAppointmentLoading && id && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="p-8 text-center">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Завантаження даних запису...</p>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="space-y-6">
          {/* Patient and Doctor Selection */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                <svg
                  className="w-3 h-3 text-green-600"
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
              Учасники запису
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Patient Select */}
              <div>
                <label
                  htmlFor="patientId"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Пацієнт *
                </label>
                <div className="relative">
                  <select
                    value={formData.patientId}
                    onChange={handleInputChange}
                    id="patientId"
                    name="patientId"
                    disabled={isLoading}
                    className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white hover:border-gray-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed appearance-none"
                  >
                    <option value="">Оберіть пацієнта</option>
                    {patientsList?.map((patient) => (
                      <option key={patient.id} value={patient.id}>
                        {patient.fullName} (ID: {patient.id})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Doctor Select */}
              <div>
                <label
                  htmlFor="doctorId"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Лікар *
                </label>
                <div className="relative">
                  <select
                    value={formData.doctorId}
                    onChange={handleInputChange}
                    id="doctorId"
                    name="doctorId"
                    disabled={isLoading}
                    className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg bg-white hover:border-gray-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed appearance-none"
                  >
                    <option value="">Оберіть лікаря</option>
                    {doctorsList?.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.fullName} (ID: {doctor.id})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Date and Time */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                <svg
                  className="w-3 h-3 text-blue-600"
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
              Дата та час
            </h2>

            <div className="max-w-md">
              {/* Date and Time Combined */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Дата та час запису *
                </label>
                <input
                  value={formData.date}
                  onChange={handleInputChange}
                  type="datetime-local"
                  id="date"
                  name="date"
                  disabled={isLoading}
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Оберіть дату та час візиту до лікаря
                </p>
              </div>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                <svg
                  className="w-3 h-3 text-yellow-600"
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
              Деталі запису
            </h2>

            <div className="space-y-6">
              {/* Reason */}
              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Причина візиту *
                </label>
                <textarea
                  value={formData.reason}
                  onChange={handleInputChange}
                  id="reason"
                  name="reason"
                  rows={4}
                  disabled={isLoading}
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-colors duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Опішіть причину візиту або симптоми..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Поля позначені * є обов'язковими</span>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={onDismiss}
                  disabled={isLoading}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Скасувати
                </button>
                <button
                  onClick={onSave}
                  disabled={isLoading}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isLoading && (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  )}
                  <span>{id ? "Зберегти" : "Створити запис"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;
