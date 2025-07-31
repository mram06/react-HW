import { useEffect, useState } from "react";
import { emptyPatientData } from "./settings";
import {
  useAddPatientMutation,
  useGetPatientByIdQuery,
  useUpdatePatientMutation,
} from "@/api";
import { useNavigate, useParams } from "react-router";
import { frontRoutes } from "@/router/frontRoutes";

function PatientsForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState(() => emptyPatientData);

  const { data: patientData, isLoading } = useGetPatientByIdQuery(id);
  const [updatePatient, { error: updateError, isLoading: updateLoading }] =
    useUpdatePatientMutation();
  const [addPatient, { error: addError, isLoading: addingLoading }] =
    useAddPatientMutation();

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (patientData) setFormData(patientData);
  }, [patientData]);

  const navigate = useNavigate();
  const onDismiss = () => {
    navigate(frontRoutes.navigate.patients.base);
  };
  const onSavePatient = async () => {
    if (id) {
      try {
        await updatePatient(formData);
      } catch (error) {
        return console.log(error);
      }
    } else {
      try {
        await addPatient(formData);
      } catch (error) {
        return console.log(error);
      }
    }
    navigate(frontRoutes.navigate.patients.base);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {id ? "Змінення даних про пацієнта" : "Додати нового пацієнта"}
        </h1>
        <p className="text-gray-600">
          {id
            ? "Змініть дані про існуючого пацієнта в EMR системі"
            : "Заповніть форму для реєстрації нового пацієнта в EMR системі"}
        </p>
      </div>

      {/* Loading State */}
      {id && isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">
            Завантаження даних пацієнта...
          </span>
        </div>
      )}

      {/* Form */}
      {!isLoading && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 relative">
          {/* Saving Overlay */}
          {(updateLoading || addingLoading) && (
            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10 rounded-lg">
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-gray-700 font-medium">
                  {updateLoading
                    ? "Збереження даних..."
                    : "Додавання пацієнта..."}
                </span>
              </div>
            </div>
          )}

          <div className="p-6 space-y-6">
            {/* Personal Information Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-blue-600"
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
                Персональна інформація
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Повне ім'я *
                  </label>
                  <input
                    value={formData.fullName}
                    onChange={handleInputChange}
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Введіть повне ім'я пацієнта"
                  />
                </div>

                <div>
                  <label
                    htmlFor="birthDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Дата народження *
                  </label>
                  <input
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Стать *
                  </label>
                  <select
                    value={formData.gender}
                    onChange={handleInputChange}
                    id="gender"
                    name="gender"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  >
                    <option value="">Виберіть стать</option>
                    <option value="male">Чоловіча</option>
                    <option value="female">Жіноча</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                Контактна інформація
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Телефон *
                  </label>
                  <input
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="+380 XX XXX XX XX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="patient@example.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Адреса
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={handleInputChange}
                    id="address"
                    name="address"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                    placeholder="Повна адреса проживання (наприклад: м. Київ, вул. Шевченка, 12)"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
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
                Нотатки
              </h2>

              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Додаткові нотатки
                </label>
                <textarea
                  value={formData.notes}
                  onChange={handleInputChange}
                  id="notes"
                  name="notes"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                  placeholder="Будь-яка додаткова інформація про пацієнта (алергії, хронічні захворювання, тощо)"
                ></textarea>
              </div>
            </div>

            {/* Form Actions */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                <button
                  onClick={onDismiss}
                  disabled={updateLoading || addingLoading}
                  className="px-6 py-2 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Скасувати
                </button>
                <button
                  onClick={onSavePatient}
                  disabled={updateLoading || addingLoading}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {(updateLoading || addingLoading) && (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  )}
                  {updateLoading
                    ? "Збереження..."
                    : addingLoading
                    ? "Додавання..."
                    : id
                    ? "Зберегти пацієнта"
                    : "Додати пацієнта"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Required Fields Note */}
      {!isLoading && (
        <div className="mt-4 text-sm text-gray-500">
          <span className="text-red-500">*</span> Обов'язкові поля для
          заповнення
        </div>
      )}
    </div>
  );
}

export default PatientsForm;
